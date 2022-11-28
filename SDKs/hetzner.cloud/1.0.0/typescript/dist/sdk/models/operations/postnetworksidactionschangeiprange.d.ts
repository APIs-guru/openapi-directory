import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNetworksIdActionsChangeIpRangePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest extends SpeakeasyBase {
    ipRange: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostNetworksIdActionsChangeIpRangeActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostNetworksIdActionsChangeIpRangeActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsChangeIpRangeActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostNetworksIdActionsChangeIpRangeActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostNetworksIdActionsChangeIpRangeActionResponseActionResources[];
    started: string;
    status: PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum;
}
export declare class PostNetworksIdActionsChangeIpRangeActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsChangeIpRangeActionResponseAction;
}
export declare class PostNetworksIdActionsChangeIpRangeRequest extends SpeakeasyBase {
    pathParams: PostNetworksIdActionsChangeIpRangePathParams;
    request?: PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest;
}
export declare class PostNetworksIdActionsChangeIpRangeResponse extends SpeakeasyBase {
    actionResponse?: PostNetworksIdActionsChangeIpRangeActionResponse;
    contentType: string;
    statusCode: number;
}
