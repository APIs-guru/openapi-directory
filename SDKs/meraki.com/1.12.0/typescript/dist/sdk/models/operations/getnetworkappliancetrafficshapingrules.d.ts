import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceTrafficShapingRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceTrafficShapingRulesPathParams;
}
export declare class GetNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
