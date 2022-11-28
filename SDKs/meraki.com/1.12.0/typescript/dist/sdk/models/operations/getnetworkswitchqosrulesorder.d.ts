import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchQosRulesOrderPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchQosRulesOrderPathParams;
}
export declare class GetNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchQosRulesOrder200ApplicationJsonObject?: Map<string, any>;
}
