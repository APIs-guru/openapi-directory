import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PredictImageUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PredictImageUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class PredictImageUrlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Prediction-Key" })
  predictionKey: string;
}


export class PredictImageUrlRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  imageUrl?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  imageUrl1?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  imageUrl2?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PredictImageUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PredictImageUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: PredictImageUrlQueryParams;

  @SpeakeasyMetadata()
  headers: PredictImageUrlHeaders;

  @SpeakeasyMetadata()
  request: PredictImageUrlRequests;
}


export class PredictImageUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePredictionResultModel?: shared.ImagePredictionResultModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
