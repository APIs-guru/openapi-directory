import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchQosRulesOrderPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkSwitchQosRulesOrderRequestBody extends SpeakeasyBase {
    ruleIds: string[];
}
export declare class UpdateNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchQosRulesOrderPathParams;
    request: UpdateNetworkSwitchQosRulesOrderRequestBody;
}
export declare class UpdateNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchQosRulesOrder200ApplicationJsonObject?: Map<string, any>;
}
