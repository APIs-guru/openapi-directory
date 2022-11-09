import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidBonjourForwardingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidBonjourForwardingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidBonjourForwardingPathParams;
}


export class GetNetworkWirelessSsidBonjourForwardingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject?: Map<string, any>;
}
