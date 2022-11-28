import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsRemoveTargetPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp extends SpeakeasyBase {
    ip: string;
}
/**
 * Configuration for label selector targets, required if type is `label_selector`
**/
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Configuration for type Server, required if type is `server`
**/
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest extends SpeakeasyBase {
    ip?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp;
    labelSelector?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;
    server?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;
    type: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsRemoveTargetActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsRemoveTargetActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsRemoveTargetActionResponseAction;
}
export declare class PostLoadBalancersIdActionsRemoveTargetRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsRemoveTargetPathParams;
    request?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
}
export declare class PostLoadBalancersIdActionsRemoveTargetResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsRemoveTargetActionResponse;
    contentType: string;
    statusCode: number;
}
