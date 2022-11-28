import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCertificatesIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetCertificatesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetCertificatesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetCertificatesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetCertificatesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetCertificatesIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetCertificatesIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetCertificatesIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetCertificatesIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetCertificatesIdActionsActionIdActionResponseAction;
}
export declare class GetCertificatesIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetCertificatesIdActionsActionIdPathParams;
}
export declare class GetCertificatesIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetCertificatesIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
