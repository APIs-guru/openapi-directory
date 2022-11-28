import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidVpnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum {
    Any = "Any",
    Tcp = "TCP",
    Udp = "UDP"
}


export class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
}


// UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel
/** 
 * The VPN split tunnel settings for this SSID.
**/
export class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules })
  rules?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[];
}


export class UpdateNetworkWirelessSsidVpnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=splitTunnel" })
  splitTunnel?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
}


export class UpdateNetworkWirelessSsidVpnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidVpnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidVpnRequestBody;
}


export class UpdateNetworkWirelessSsidVpnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidVpn200ApplicationJsonObject?: Map<string, any>;
}
