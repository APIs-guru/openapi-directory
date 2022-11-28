import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadRemoteImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DownloadRemoteImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: shared.ImageTypeEnum;
}


export class DownloadRemoteImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DownloadRemoteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadRemoteImagePathParams;

  @SpeakeasyMetadata()
  queryParams: DownloadRemoteImageQueryParams;

  @SpeakeasyMetadata()
  security: DownloadRemoteImageSecurity;
}


export class DownloadRemoteImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
