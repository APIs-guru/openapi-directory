import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidVpnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidVpnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidVpnPathParams;
}


export class GetNetworkWirelessSsidVpnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidVpn200ApplicationJsonObject?: Map<string, any>;
}
