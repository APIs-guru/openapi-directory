import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelQueryParams;

  @SpeakeasyMetadata()
  security: GetChannelSecurity;
}


export class GetChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDto?: shared.BaseItemDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
