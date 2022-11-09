import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuickTestImageUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class QuickTestImageUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class QuickTestImageUrlHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class QuickTestImageUrlRequests extends SpeakeasyBase {
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


export class QuickTestImageUrlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QuickTestImageUrlPathParams;

  @Metadata()
  queryParams: QuickTestImageUrlQueryParams;

  @Metadata()
  headers: QuickTestImageUrlHeaders;

  @Metadata()
  request: QuickTestImageUrlRequests;
}


export class QuickTestImageUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imagePredictionResult?: shared.ImagePredictionResult;

  @Metadata()
  statusCode: number;
}
