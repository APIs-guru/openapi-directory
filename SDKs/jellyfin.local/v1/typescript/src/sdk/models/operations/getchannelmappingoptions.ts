import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelMappingOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerId" })
  providerId?: string;
}


export class GetChannelMappingOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelMappingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChannelMappingOptionsQueryParams;

  @SpeakeasyMetadata()
  security: GetChannelMappingOptionsSecurity;
}


export class GetChannelMappingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channelMappingOptionsDto?: shared.ChannelMappingOptionsDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
