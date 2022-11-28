import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsRebuildPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsRebuildRebuildServerRequest extends SpeakeasyBase {
    image: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsRebuild201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsRebuild201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsRebuild201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsRebuild201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsRebuild201ApplicationJsonActionResources[];
    started: string;
    status: PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum;
}
export declare class PostServersIdActionsRebuild201ApplicationJson extends SpeakeasyBase {
    action?: PostServersIdActionsRebuild201ApplicationJsonAction;
    rootPassword?: string;
}
export declare class PostServersIdActionsRebuildRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsRebuildPathParams;
    request?: PostServersIdActionsRebuildRebuildServerRequest;
}
export declare class PostServersIdActionsRebuildResponse extends SpeakeasyBase {
    contentType: string;
    postServersIdActionsRebuild201ApplicationJsonObject?: PostServersIdActionsRebuild201ApplicationJson;
    statusCode: number;
}
