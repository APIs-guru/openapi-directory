import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsLatestItems" })
  supportsLatestItems?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsMediaDeletion" })
  supportsMediaDeletion?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetChannelsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChannelsQueryParams;

  @Metadata()
  security: GetChannelsSecurity;
}


export class GetChannelsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
