import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNetworksIdActionsDeleteRoutePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest extends SpeakeasyBase {
    destination: string;
    gateway: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostNetworksIdActionsDeleteRouteActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostNetworksIdActionsDeleteRouteActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsDeleteRouteActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostNetworksIdActionsDeleteRouteActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostNetworksIdActionsDeleteRouteActionResponseActionResources[];
    started: string;
    status: PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum;
}
export declare class PostNetworksIdActionsDeleteRouteActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsDeleteRouteActionResponseAction;
}
export declare class PostNetworksIdActionsDeleteRouteRequest extends SpeakeasyBase {
    pathParams: PostNetworksIdActionsDeleteRoutePathParams;
    request?: PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;
}
export declare class PostNetworksIdActionsDeleteRouteResponse extends SpeakeasyBase {
    actionResponse?: PostNetworksIdActionsDeleteRouteActionResponse;
    contentType: string;
    statusCode: number;
}
