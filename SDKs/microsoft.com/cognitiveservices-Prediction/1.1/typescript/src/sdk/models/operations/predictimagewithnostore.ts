import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PredictImageWithNoStorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PredictImageWithNoStoreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class PredictImageWithNoStoreHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Prediction-Key" })
  predictionKey: string;
}


export class PredictImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class PredictImageWithNoStoreRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageData: PredictImageWithNoStoreRequestBodyImageData;
}


export class PredictImageWithNoStoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PredictImageWithNoStorePathParams;

  @Metadata()
  queryParams: PredictImageWithNoStoreQueryParams;

  @Metadata()
  headers: PredictImageWithNoStoreHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PredictImageWithNoStoreRequestBody;
}


export class PredictImageWithNoStoreResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imagePredictionResultModel?: shared.ImagePredictionResultModel;

  @Metadata()
  statusCode: number;
}
