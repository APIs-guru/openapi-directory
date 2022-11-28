import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsAddTargetPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequestIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Configuration for label selector targets, required if type is `label_selector`
**/
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Configuration for type Server, required if type is `server`
**/
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequestServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancersIdActionsAddTargetAddTargetRequest extends SpeakeasyBase {
    ip?: PostLoadBalancersIdActionsAddTargetAddTargetRequestIp;
    labelSelector?: PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;
    server?: PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;
    type: PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;
    usePrivateIp?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsAddTargetActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsAddTargetActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsAddTargetActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsAddTargetActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsAddTargetActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsAddTargetActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsAddTargetActionResponseAction;
}
export declare class PostLoadBalancersIdActionsAddTargetRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsAddTargetPathParams;
    request?: PostLoadBalancersIdActionsAddTargetAddTargetRequest;
}
export declare class PostLoadBalancersIdActionsAddTargetResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsAddTargetActionResponse;
    contentType: string;
    statusCode: number;
}
