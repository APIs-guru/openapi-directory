import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelPathParams;

  @Metadata()
  queryParams: GetChannelQueryParams;

  @Metadata()
  security: GetChannelSecurity;
}


export class GetChannelResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDto?: shared.BaseItemDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
