import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsEnableBackupPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsEnableBackupActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsEnableBackupActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsEnableBackupActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsEnableBackupActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsEnableBackupActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsEnableBackupActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsEnableBackupActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsEnableBackupActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsEnableBackupActionResponseAction;
}
export declare class PostServersIdActionsEnableBackupRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsEnableBackupPathParams;
}
export declare class PostServersIdActionsEnableBackupResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsEnableBackupActionResponse;
    contentType: string;
    statusCode: number;
}
