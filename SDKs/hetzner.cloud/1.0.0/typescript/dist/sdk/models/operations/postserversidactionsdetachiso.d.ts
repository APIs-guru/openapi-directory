import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsDetachIsoPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsDetachIsoActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsDetachIsoActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsDetachIsoActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsDetachIsoActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsDetachIsoActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsDetachIsoActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsDetachIsoActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsDetachIsoActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsDetachIsoActionResponseAction;
}
export declare class PostServersIdActionsDetachIsoRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsDetachIsoPathParams;
}
export declare class PostServersIdActionsDetachIsoResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsDetachIsoActionResponse;
    contentType: string;
    statusCode: number;
}
