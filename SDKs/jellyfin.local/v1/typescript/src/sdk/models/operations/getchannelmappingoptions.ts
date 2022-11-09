import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelMappingOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=providerId" })
  providerId?: string;
}


export class GetChannelMappingOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelMappingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChannelMappingOptionsQueryParams;

  @Metadata()
  security: GetChannelMappingOptionsSecurity;
}


export class GetChannelMappingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  channelMappingOptionsDto?: shared.ChannelMappingOptionsDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
