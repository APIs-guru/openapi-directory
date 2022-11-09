import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PredictImageUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class PredictImageUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class PredictImageUrlHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Prediction-Key" })
  predictionKey: string;
}


export class PredictImageUrlRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  imageUrl?: shared.ImageUrl;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  imageUrl1?: shared.ImageUrl;

  @Metadata({ data: "request, media_type=text/json" })
  imageUrl2?: shared.ImageUrl;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PredictImageUrlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PredictImageUrlPathParams;

  @Metadata()
  queryParams: PredictImageUrlQueryParams;

  @Metadata()
  headers: PredictImageUrlHeaders;

  @Metadata()
  request: PredictImageUrlRequests;
}


export class PredictImageUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imagePredictionResultModel?: shared.ImagePredictionResultModel;

  @Metadata()
  statusCode: number;
}
