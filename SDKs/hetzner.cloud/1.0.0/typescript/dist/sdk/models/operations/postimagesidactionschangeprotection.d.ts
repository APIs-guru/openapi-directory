import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostImagesIdActionsChangeProtectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostImagesIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    delete?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostImagesIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostImagesIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostImagesIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostImagesIdActionsChangeProtectionActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostImagesIdActionsChangeProtectionActionResponseActionResources[];
    started: string;
    status: PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum;
}
export declare class PostImagesIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostImagesIdActionsChangeProtectionActionResponseAction;
}
export declare class PostImagesIdActionsChangeProtectionRequest extends SpeakeasyBase {
    pathParams: PostImagesIdActionsChangeProtectionPathParams;
    request?: PostImagesIdActionsChangeProtectionRequestBody;
}
export declare class PostImagesIdActionsChangeProtectionResponse extends SpeakeasyBase {
    actionResponse?: PostImagesIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
}
