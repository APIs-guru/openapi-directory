import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsDisableBackupPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsDisableBackupActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsDisableBackupActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsDisableBackupActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsDisableBackupActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsDisableBackupActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsDisableBackupActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsDisableBackupActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsDisableBackupActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsDisableBackupActionResponseAction;
}
export declare class PostServersIdActionsDisableBackupRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsDisableBackupPathParams;
}
export declare class PostServersIdActionsDisableBackupResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsDisableBackupActionResponse;
    contentType: string;
    statusCode: number;
}
