import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PredictImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PredictImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class PredictImageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Prediction-Key" })
  predictionKey: string;
}


export class PredictImageRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class PredictImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: PredictImageRequestBodyImageData;
}


export class PredictImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PredictImagePathParams;

  @SpeakeasyMetadata()
  queryParams: PredictImageQueryParams;

  @SpeakeasyMetadata()
  headers: PredictImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PredictImageRequestBody;
}


export class PredictImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePredictionResultModel?: shared.ImagePredictionResultModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
