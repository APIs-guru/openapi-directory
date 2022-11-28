import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchQosRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchQosRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchQosRulesPathParams;
}
export declare class GetNetworkSwitchQosRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchQosRules200ApplicationJsonObject?: Map<string, any>;
}
