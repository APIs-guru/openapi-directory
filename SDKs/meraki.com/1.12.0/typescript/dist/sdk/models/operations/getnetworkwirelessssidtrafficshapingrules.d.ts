import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidTrafficShapingRulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidTrafficShapingRulesPathParams;
}
export declare class GetNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
