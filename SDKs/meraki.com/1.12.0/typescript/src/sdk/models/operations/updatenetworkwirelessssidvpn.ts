import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidVpnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum {
    Any = "Any"
,    Tcp = "TCP"
,    Udp = "UDP"
}


export class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
}


// UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel
/** 
 * The VPN split tunnel settings for this SSID.
**/
export class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules })
  rules?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[];
}


export class UpdateNetworkWirelessSsidVpnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=splitTunnel" })
  splitTunnel?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
}


export class UpdateNetworkWirelessSsidVpnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidVpnPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidVpnRequestBody;
}


export class UpdateNetworkWirelessSsidVpnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidVpn200ApplicationJsonObject?: Map<string, any>;
}
