import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchAccessControlListsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Any = "any"
}
export declare class UpdateNetworkSwitchAccessControlListsRequestBodyRules extends SpeakeasyBase {
    comment?: string;
    dstCidr: string;
    dstPort?: string;
    ipVersion?: UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
    policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
    protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;
    srcCidr: string;
    srcPort?: string;
    vlan?: string;
}
export declare class UpdateNetworkSwitchAccessControlListsRequestBody extends SpeakeasyBase {
    rules: UpdateNetworkSwitchAccessControlListsRequestBodyRules[];
}
export declare class UpdateNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchAccessControlListsPathParams;
    request: UpdateNetworkSwitchAccessControlListsRequestBody;
}
export declare class UpdateNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchAccessControlLists200ApplicationJsonObject?: Map<string, any>;
}
