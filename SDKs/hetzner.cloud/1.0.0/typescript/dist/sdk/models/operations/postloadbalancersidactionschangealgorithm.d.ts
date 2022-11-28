import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsChangeAlgorithmPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmRequestBody extends SpeakeasyBase {
    type: PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsChangeAlgorithmPathParams;
    request?: PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
}
export declare class PostLoadBalancersIdActionsChangeAlgorithmResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsChangeAlgorithmActionResponse;
    contentType: string;
    statusCode: number;
}
