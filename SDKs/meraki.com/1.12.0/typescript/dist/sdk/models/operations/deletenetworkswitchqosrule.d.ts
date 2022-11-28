import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkSwitchQosRulePathParams extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare class DeleteNetworkSwitchQosRuleRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkSwitchQosRulePathParams;
}
export declare class DeleteNetworkSwitchQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
