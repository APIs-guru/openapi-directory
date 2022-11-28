import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QuickTestImageUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class QuickTestImageUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class QuickTestImageUrlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class QuickTestImageUrlRequests extends SpeakeasyBase {
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


export class QuickTestImageUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuickTestImageUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: QuickTestImageUrlQueryParams;

  @SpeakeasyMetadata()
  headers: QuickTestImageUrlHeaders;

  @SpeakeasyMetadata()
  request: QuickTestImageUrlRequests;
}


export class QuickTestImageUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePrediction?: shared.ImagePrediction;

  @SpeakeasyMetadata()
  statusCode: number;
}
