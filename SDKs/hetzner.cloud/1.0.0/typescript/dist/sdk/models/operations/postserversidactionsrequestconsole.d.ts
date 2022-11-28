import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsRequestConsolePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsRequestConsole201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsRequestConsole201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsRequestConsole201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsRequestConsole201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsRequestConsole201ApplicationJsonActionResources[];
    started: string;
    status: PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum;
}
export declare class PostServersIdActionsRequestConsole201ApplicationJson extends SpeakeasyBase {
    action: PostServersIdActionsRequestConsole201ApplicationJsonAction;
    password: string;
    wssUrl: string;
}
export declare class PostServersIdActionsRequestConsoleRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsRequestConsolePathParams;
}
export declare class PostServersIdActionsRequestConsoleResponse extends SpeakeasyBase {
    contentType: string;
    postServersIdActionsRequestConsole201ApplicationJsonObject?: PostServersIdActionsRequestConsole201ApplicationJson;
    statusCode: number;
}
