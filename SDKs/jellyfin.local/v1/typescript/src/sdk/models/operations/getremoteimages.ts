import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRemoteImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetRemoteImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAllLanguages" })
  includeAllLanguages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.ImageTypeEnum;
}


export class GetRemoteImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRemoteImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRemoteImagesQueryParams;

  @SpeakeasyMetadata()
  security: GetRemoteImagesSecurity;
}


export class GetRemoteImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  remoteImageResult?: shared.RemoteImageResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
