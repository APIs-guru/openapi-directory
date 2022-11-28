import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsResetPasswordPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsResetPassword201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsResetPassword201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsResetPassword201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsResetPassword201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsResetPassword201ApplicationJsonActionResources[];
    started: string;
    status: PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum;
}
export declare class PostServersIdActionsResetPassword201ApplicationJson extends SpeakeasyBase {
    action?: PostServersIdActionsResetPassword201ApplicationJsonAction;
    rootPassword?: string;
}
export declare class PostServersIdActionsResetPasswordRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsResetPasswordPathParams;
}
export declare class PostServersIdActionsResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    postServersIdActionsResetPassword201ApplicationJsonObject?: PostServersIdActionsResetPassword201ApplicationJson;
    statusCode: number;
}
