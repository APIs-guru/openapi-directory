import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for type LabelSelector, required if type is `label_selector`
**/
export declare class PostFirewallsCreateFirewallRequestApplyToLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Configuration for type Server, required if type is `server`
**/
export declare class PostFirewallsCreateFirewallRequestApplyToServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostFirewallsCreateFirewallRequestApplyToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsCreateFirewallRequestApplyTo extends SpeakeasyBase {
    labelSelector?: PostFirewallsCreateFirewallRequestApplyToLabelSelector;
    server?: PostFirewallsCreateFirewallRequestApplyToServer;
    type: PostFirewallsCreateFirewallRequestApplyToTypeEnum;
}
export declare enum PostFirewallsCreateFirewallRequestRuleDirectionEnum {
    In = "in",
    Out = "out"
}
export declare enum PostFirewallsCreateFirewallRequestRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PostFirewallsCreateFirewallRequestRule extends SpeakeasyBase {
    description?: string;
    destinationIps?: string[];
    direction: PostFirewallsCreateFirewallRequestRuleDirectionEnum;
    port?: string;
    protocol: PostFirewallsCreateFirewallRequestRuleProtocolEnum;
    sourceIps?: string[];
}
export declare class PostFirewallsCreateFirewallRequest extends SpeakeasyBase {
    applyTo?: PostFirewallsCreateFirewallRequestApplyTo[];
    labels?: Map<string, any>;
    name: string;
    rules?: PostFirewallsCreateFirewallRequestRule[];
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFirewallsCreateFirewallResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFirewallsCreateFirewallResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFirewallsCreateFirewallResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsCreateFirewallResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFirewallsCreateFirewallResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFirewallsCreateFirewallResponseActionResources[];
    started: string;
    status: PostFirewallsCreateFirewallResponseActionStatusEnum;
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer;
    type?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    selector: string;
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector;
    server?: PostFirewallsCreateFirewallResponseFirewallAppliedToServer;
    type: PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum;
}
export declare enum PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
export declare enum PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PostFirewallsCreateFirewallResponseFirewallRule extends SpeakeasyBase {
    description?: string;
    destinationIps?: string[];
    direction: PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum;
    port?: string;
    protocol: PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum;
    sourceIps?: string[];
}
export declare class PostFirewallsCreateFirewallResponseFirewall extends SpeakeasyBase {
    appliedTo: PostFirewallsCreateFirewallResponseFirewallAppliedTo[];
    created: string;
    id: number;
    labels?: Map<string, string>;
    name: string;
    rules: PostFirewallsCreateFirewallResponseFirewallRule[];
}
export declare class PostFirewallsCreateFirewallResponse extends SpeakeasyBase {
    actions?: PostFirewallsCreateFirewallResponseAction[];
    firewall?: PostFirewallsCreateFirewallResponseFirewall;
}
export declare class PostFirewallsRequest extends SpeakeasyBase {
    request?: PostFirewallsCreateFirewallRequest;
}
export declare class PostFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    createFirewallResponse?: PostFirewallsCreateFirewallResponse;
    statusCode: number;
}
