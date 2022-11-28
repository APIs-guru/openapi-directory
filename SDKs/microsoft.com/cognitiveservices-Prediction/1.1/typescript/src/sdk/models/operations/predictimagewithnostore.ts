import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PredictImageWithNoStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PredictImageWithNoStoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class PredictImageWithNoStoreHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Prediction-Key" })
  predictionKey: string;
}


export class PredictImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class PredictImageWithNoStoreRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: PredictImageWithNoStoreRequestBodyImageData;
}


export class PredictImageWithNoStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PredictImageWithNoStorePathParams;

  @SpeakeasyMetadata()
  queryParams: PredictImageWithNoStoreQueryParams;

  @SpeakeasyMetadata()
  headers: PredictImageWithNoStoreHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PredictImageWithNoStoreRequestBody;
}


export class PredictImageWithNoStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePredictionResultModel?: shared.ImagePredictionResultModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
