import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessAlternateManagementInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessAlternateManagementInterfacePathParams;
}


export class GetNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
