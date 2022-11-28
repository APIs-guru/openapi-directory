import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsAttachIsoPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsAttachIsoRequestBody extends SpeakeasyBase {
    iso: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsAttachIsoActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsAttachIsoActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsAttachIsoActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsAttachIsoActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsAttachIsoActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsAttachIsoActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsAttachIsoActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsAttachIsoActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsAttachIsoActionResponseAction;
}
export declare class PostServersIdActionsAttachIsoRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsAttachIsoPathParams;
    request?: PostServersIdActionsAttachIsoRequestBody;
}
export declare class PostServersIdActionsAttachIsoResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsAttachIsoActionResponse;
    contentType: string;
    statusCode: number;
}
