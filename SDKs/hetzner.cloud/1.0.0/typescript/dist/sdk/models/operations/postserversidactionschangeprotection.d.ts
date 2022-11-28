import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsChangeProtectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    delete?: boolean;
    rebuild?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsChangeProtectionActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsChangeProtectionActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsChangeProtectionActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeProtectionActionResponseAction;
}
export declare class PostServersIdActionsChangeProtectionRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsChangeProtectionPathParams;
    request?: PostServersIdActionsChangeProtectionRequestBody;
}
export declare class PostServersIdActionsChangeProtectionResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
}
