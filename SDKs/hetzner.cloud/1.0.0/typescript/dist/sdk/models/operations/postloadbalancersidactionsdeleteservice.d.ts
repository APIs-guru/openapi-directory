import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsDeleteServicePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersIdActionsDeleteServiceRequestBody extends SpeakeasyBase {
    listenPort: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsDeleteServiceActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsDeleteServiceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsDeleteServiceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsDeleteServiceRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsDeleteServicePathParams;
    request?: PostLoadBalancersIdActionsDeleteServiceRequestBody;
}
export declare class PostLoadBalancersIdActionsDeleteServiceResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsDeleteServiceActionResponse;
    contentType: string;
    statusCode: number;
}
