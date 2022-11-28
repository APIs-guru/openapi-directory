import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutFirewallsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutFirewallsIdUpdateFirewallRequest extends SpeakeasyBase {
    labels?: Map<string, any>;
    name?: string;
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    id: number;
}
export declare enum PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
    type?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    selector: string;
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
    id: number;
}
export declare enum PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
    server?: PutFirewallsIdFirewallResponseFirewallAppliedToServer;
    type: PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}
export declare enum PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
export declare enum PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PutFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
    description?: string;
    destinationIps?: string[];
    direction: PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum;
    port?: string;
    protocol: PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum;
    sourceIps?: string[];
}
export declare class PutFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
    appliedTo: PutFirewallsIdFirewallResponseFirewallAppliedTo[];
    created: string;
    id: number;
    labels?: Map<string, string>;
    name: string;
    rules: PutFirewallsIdFirewallResponseFirewallRule[];
}
export declare class PutFirewallsIdFirewallResponse extends SpeakeasyBase {
    firewall: PutFirewallsIdFirewallResponseFirewall;
}
export declare class PutFirewallsIdRequest extends SpeakeasyBase {
    pathParams: PutFirewallsIdPathParams;
    request?: PutFirewallsIdUpdateFirewallRequest;
}
export declare class PutFirewallsIdResponse extends SpeakeasyBase {
    contentType: string;
    firewallResponse?: PutFirewallsIdFirewallResponse;
    statusCode: number;
}
