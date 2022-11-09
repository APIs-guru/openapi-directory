import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchSettingsPathParams;
}


export class GetNetworkSwitchSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchSettings200ApplicationJsonObject?: Map<string, any>;
}
