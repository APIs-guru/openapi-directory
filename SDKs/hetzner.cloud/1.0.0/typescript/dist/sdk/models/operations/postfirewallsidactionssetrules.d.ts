import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFirewallsIdActionsSetRulesPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum {
    In = "in",
    Out = "out"
}
export declare enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PostFirewallsIdActionsSetRulesSetRulesRequestRule extends SpeakeasyBase {
    description?: string;
    destinationIps?: string[];
    direction: PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;
    port?: string;
    protocol: PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;
    sourceIps?: string[];
}
export declare class PostFirewallsIdActionsSetRulesSetRulesRequest extends SpeakeasyBase {
    rules: PostFirewallsIdActionsSetRulesSetRulesRequestRule[];
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFirewallsIdActionsSetRulesActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFirewallsIdActionsSetRulesActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFirewallsIdActionsSetRulesActionsResponseActionResources[];
    started: string;
    status: PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum;
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseMeta extends SpeakeasyBase {
    pagination: PostFirewallsIdActionsSetRulesActionsResponseMetaPagination;
}
export declare class PostFirewallsIdActionsSetRulesActionsResponse extends SpeakeasyBase {
    actions: PostFirewallsIdActionsSetRulesActionsResponseAction[];
    meta?: PostFirewallsIdActionsSetRulesActionsResponseMeta;
}
export declare class PostFirewallsIdActionsSetRulesRequest extends SpeakeasyBase {
    pathParams: PostFirewallsIdActionsSetRulesPathParams;
    request?: PostFirewallsIdActionsSetRulesSetRulesRequest;
}
export declare class PostFirewallsIdActionsSetRulesResponse extends SpeakeasyBase {
    actionsResponse?: PostFirewallsIdActionsSetRulesActionsResponse;
    contentType: string;
    statusCode: number;
}
