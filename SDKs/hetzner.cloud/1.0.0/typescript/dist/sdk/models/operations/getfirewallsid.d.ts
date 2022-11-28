import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFirewallsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    id: number;
}
export declare enum GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
    type?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    selector: string;
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
    id: number;
}
export declare enum GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
    server?: GetFirewallsIdFirewallResponseFirewallAppliedToServer;
    type: GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}
export declare enum GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
export declare enum GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class GetFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
    description?: string;
    destinationIps?: string[];
    direction: GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum;
    port?: string;
    protocol: GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum;
    sourceIps?: string[];
}
export declare class GetFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
    appliedTo: GetFirewallsIdFirewallResponseFirewallAppliedTo[];
    created: string;
    id: number;
    labels?: Map<string, string>;
    name: string;
    rules: GetFirewallsIdFirewallResponseFirewallRule[];
}
export declare class GetFirewallsIdFirewallResponse extends SpeakeasyBase {
    firewall: GetFirewallsIdFirewallResponseFirewall;
}
export declare class GetFirewallsIdRequest extends SpeakeasyBase {
    pathParams: GetFirewallsIdPathParams;
}
export declare class GetFirewallsIdResponse extends SpeakeasyBase {
    contentType: string;
    firewallResponse?: GetFirewallsIdFirewallResponse;
    statusCode: number;
}
