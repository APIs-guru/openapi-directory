import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidVpnPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare enum UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum {
    Any = "Any",
    Tcp = "TCP",
    Udp = "UDP"
}
export declare class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: string;
    protocol?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
}
/**
 * The VPN split tunnel settings for this SSID.
**/
export declare class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel extends SpeakeasyBase {
    enabled?: boolean;
    rules?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[];
}
export declare class UpdateNetworkWirelessSsidVpnRequestBody extends SpeakeasyBase {
    splitTunnel?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
}
export declare class UpdateNetworkWirelessSsidVpnRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidVpnPathParams;
    request?: UpdateNetworkWirelessSsidVpnRequestBody;
}
export declare class UpdateNetworkWirelessSsidVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidVpn200ApplicationJsonObject?: Map<string, any>;
}
