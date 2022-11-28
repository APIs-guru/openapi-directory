import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchQosRulePathParams extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare class GetNetworkSwitchQosRuleRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchQosRulePathParams;
}
export declare class GetNetworkSwitchQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchQosRule200ApplicationJsonObject?: Map<string, any>;
}
