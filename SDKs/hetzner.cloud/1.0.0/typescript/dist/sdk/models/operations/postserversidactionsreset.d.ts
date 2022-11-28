import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsResetPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsResetActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsResetActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsResetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsResetActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsResetActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsResetActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsResetActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsResetActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsResetActionResponseAction;
}
export declare class PostServersIdActionsResetRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsResetPathParams;
}
export declare class PostServersIdActionsResetResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsResetActionResponse;
    contentType: string;
    statusCode: number;
}
