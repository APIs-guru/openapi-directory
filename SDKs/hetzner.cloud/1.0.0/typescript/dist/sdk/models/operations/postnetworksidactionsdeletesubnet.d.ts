import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNetworksIdActionsDeleteSubnetPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest extends SpeakeasyBase {
    ipRange: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostNetworksIdActionsDeleteSubnetActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostNetworksIdActionsDeleteSubnetActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsDeleteSubnetActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostNetworksIdActionsDeleteSubnetActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostNetworksIdActionsDeleteSubnetActionResponseActionResources[];
    started: string;
    status: PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum;
}
export declare class PostNetworksIdActionsDeleteSubnetActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsDeleteSubnetActionResponseAction;
}
export declare class PostNetworksIdActionsDeleteSubnetRequest extends SpeakeasyBase {
    pathParams: PostNetworksIdActionsDeleteSubnetPathParams;
    request?: PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest;
}
export declare class PostNetworksIdActionsDeleteSubnetResponse extends SpeakeasyBase {
    actionResponse?: PostNetworksIdActionsDeleteSubnetActionResponse;
    contentType: string;
    statusCode: number;
}
