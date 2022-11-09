import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadRemoteImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DownloadRemoteImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: shared.ImageTypeEnum;
}


export class DownloadRemoteImageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DownloadRemoteImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadRemoteImagePathParams;

  @Metadata()
  queryParams: DownloadRemoteImageQueryParams;

  @Metadata()
  security: DownloadRemoteImageSecurity;
}


export class DownloadRemoteImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
