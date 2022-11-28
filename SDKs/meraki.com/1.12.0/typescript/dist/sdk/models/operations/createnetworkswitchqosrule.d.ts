import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchQosRulePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkSwitchQosRuleRequestBodyProtocolEnum {
    Any = "ANY",
    Tcp = "TCP",
    Udp = "UDP"
}
export declare class CreateNetworkSwitchQosRuleRequestBody extends SpeakeasyBase {
    dscp?: number;
    dstPort?: number;
    dstPortRange?: string;
    protocol?: CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;
    srcPort?: number;
    srcPortRange?: string;
    vlan: number;
}
export declare class CreateNetworkSwitchQosRuleRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchQosRulePathParams;
    request: CreateNetworkSwitchQosRuleRequestBody;
}
export declare class CreateNetworkSwitchQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchQosRule201ApplicationJsonObject?: Map<string, any>;
}
