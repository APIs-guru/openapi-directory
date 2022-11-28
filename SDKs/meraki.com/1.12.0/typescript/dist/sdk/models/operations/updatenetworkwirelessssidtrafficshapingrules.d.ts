import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare enum UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
    type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
    value: string;
}
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
    bandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
    settings?: string;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
    definitions: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[];
    dscpTagValue?: number;
    pcpTagValue?: number;
    perClientBandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody extends SpeakeasyBase {
    defaultRulesEnabled?: boolean;
    rules?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[];
    trafficShapingEnabled?: boolean;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidTrafficShapingRulesPathParams;
    request?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
