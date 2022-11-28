import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceTrafficShapingRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange",
    LocalNet = "localNet"
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
    type: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
    value: string;
}
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
    limitDown?: number;
    limitUp?: number;
}
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
    bandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
    settings?: string;
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
    definitions: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[];
    dscpTagValue?: number;
    perClientBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
    priority?: string;
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBody extends SpeakeasyBase {
    defaultRulesEnabled?: boolean;
    rules?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceTrafficShapingRulesPathParams;
    request?: UpdateNetworkApplianceTrafficShapingRulesRequestBody;
}
export declare class UpdateNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
