import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchQosRulePathParams extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare enum UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum {
    Any = "ANY",
    Tcp = "TCP",
    Udp = "UDP"
}
export declare class UpdateNetworkSwitchQosRuleRequestBody extends SpeakeasyBase {
    dscp?: number;
    dstPort?: number;
    dstPortRange?: string;
    protocol?: UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;
    srcPort?: number;
    srcPortRange?: string;
    vlan?: number;
}
export declare class UpdateNetworkSwitchQosRuleRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchQosRulePathParams;
    request?: UpdateNetworkSwitchQosRuleRequestBody;
}
export declare class UpdateNetworkSwitchQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchQosRule200ApplicationJsonObject?: Map<string, any>;
}
