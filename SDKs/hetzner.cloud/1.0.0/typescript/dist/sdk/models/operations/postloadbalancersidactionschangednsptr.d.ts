import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsChangeDnsPtrPathParams;
    request?: PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest;
}
export declare class PostLoadBalancersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsChangeDnsPtrActionResponse;
    contentType: string;
    statusCode: number;
}
