import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsDetachFromNetworkPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest extends SpeakeasyBase {
    network: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsDetachFromNetworkActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsDetachFromNetworkActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsDetachFromNetworkActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsDetachFromNetworkActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsDetachFromNetworkActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsDetachFromNetworkActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsDetachFromNetworkActionResponseAction;
}
export declare class PostServersIdActionsDetachFromNetworkRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsDetachFromNetworkPathParams;
    request?: PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;
}
export declare class PostServersIdActionsDetachFromNetworkResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsDetachFromNetworkActionResponse;
    contentType: string;
    statusCode: number;
}
