import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsShutdownPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsShutdownActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsShutdownActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsShutdownActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsShutdownActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsShutdownActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsShutdownActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsShutdownActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsShutdownActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsShutdownActionResponseAction;
}
export declare class PostServersIdActionsShutdownRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsShutdownPathParams;
}
export declare class PostServersIdActionsShutdownResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsShutdownActionResponse;
    contentType: string;
    statusCode: number;
}
