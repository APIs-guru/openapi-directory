import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNetworksIdActionsAddRoutePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostNetworksIdActionsAddRouteAddDeleteRouteRequest extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostNetworksIdActionsAddRouteActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostNetworksIdActionsAddRouteActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostNetworksIdActionsAddRouteActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsAddRouteActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostNetworksIdActionsAddRouteActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostNetworksIdActionsAddRouteActionResponseActionResources[];
    started: string;
    status: PostNetworksIdActionsAddRouteActionResponseActionStatusEnum;
}
export declare class PostNetworksIdActionsAddRouteActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsAddRouteActionResponseAction;
}
export declare class PostNetworksIdActionsAddRouteRequest extends SpeakeasyBase {
    pathParams: PostNetworksIdActionsAddRoutePathParams;
    request?: PostNetworksIdActionsAddRouteAddDeleteRouteRequest;
}
export declare class PostNetworksIdActionsAddRouteResponse extends SpeakeasyBase {
    actionResponse?: PostNetworksIdActionsAddRouteActionResponse;
    contentType: string;
    statusCode: number;
}
