import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRemoteImagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetRemoteImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAllLanguages" })
  includeAllLanguages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=providerName" })
  providerName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.ImageTypeEnum;
}


export class GetRemoteImagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteImagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRemoteImagesPathParams;

  @Metadata()
  queryParams: GetRemoteImagesQueryParams;

  @Metadata()
  security: GetRemoteImagesSecurity;
}


export class GetRemoteImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  remoteImageResult?: shared.RemoteImageResult;

  @Metadata()
  statusCode: number;
}
