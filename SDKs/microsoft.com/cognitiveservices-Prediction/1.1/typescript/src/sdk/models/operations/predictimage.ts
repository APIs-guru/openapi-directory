import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PredictImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PredictImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class PredictImageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Prediction-Key" })
  predictionKey: string;
}


export class PredictImageRequestBodyImageData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class PredictImageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageData: PredictImageRequestBodyImageData;
}


export class PredictImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PredictImagePathParams;

  @Metadata()
  queryParams: PredictImageQueryParams;

  @Metadata()
  headers: PredictImageHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PredictImageRequestBody;
}


export class PredictImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imagePredictionResultModel?: shared.ImagePredictionResultModel;

  @Metadata()
  statusCode: number;
}
