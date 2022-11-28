import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCertificatesIdActionsRetryPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostCertificatesIdActionsRetryActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostCertificatesIdActionsRetryActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostCertificatesIdActionsRetryActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostCertificatesIdActionsRetryActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostCertificatesIdActionsRetryActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostCertificatesIdActionsRetryActionResponseActionResources[];
    started: string;
    status: PostCertificatesIdActionsRetryActionResponseActionStatusEnum;
}
export declare class PostCertificatesIdActionsRetryActionResponse extends SpeakeasyBase {
    action: PostCertificatesIdActionsRetryActionResponseAction;
}
export declare class PostCertificatesIdActionsRetryRequest extends SpeakeasyBase {
    pathParams: PostCertificatesIdActionsRetryPathParams;
}
export declare class PostCertificatesIdActionsRetryResponse extends SpeakeasyBase {
    actionResponse?: PostCertificatesIdActionsRetryActionResponse;
    contentType: string;
    statusCode: number;
}
