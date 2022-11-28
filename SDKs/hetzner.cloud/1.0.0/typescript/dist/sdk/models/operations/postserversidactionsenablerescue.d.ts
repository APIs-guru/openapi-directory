import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsEnableRescuePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PostServersIdActionsEnableRescueRequestBodyTypeEnum {
    Linux64 = "linux64",
    Linux32 = "linux32",
    Freebsd64 = "freebsd64"
}
export declare class PostServersIdActionsEnableRescueRequestBody extends SpeakeasyBase {
    sshKeys?: number[];
    type?: PostServersIdActionsEnableRescueRequestBodyTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsEnableRescue201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsEnableRescue201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsEnableRescue201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsEnableRescue201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsEnableRescue201ApplicationJsonActionResources[];
    started: string;
    status: PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum;
}
export declare class PostServersIdActionsEnableRescue201ApplicationJson extends SpeakeasyBase {
    action?: PostServersIdActionsEnableRescue201ApplicationJsonAction;
    rootPassword?: string;
}
export declare class PostServersIdActionsEnableRescueRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsEnableRescuePathParams;
    request?: PostServersIdActionsEnableRescueRequestBody;
}
export declare class PostServersIdActionsEnableRescueResponse extends SpeakeasyBase {
    contentType: string;
    postServersIdActionsEnableRescue201ApplicationJsonObject?: PostServersIdActionsEnableRescue201ApplicationJson;
    statusCode: number;
}
