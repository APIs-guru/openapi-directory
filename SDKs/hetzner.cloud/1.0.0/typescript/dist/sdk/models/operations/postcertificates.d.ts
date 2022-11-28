import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCertificatesCreateCertificateRequestTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class PostCertificatesCreateCertificateRequest extends SpeakeasyBase {
    certificate?: string;
    domainNames?: string[];
    labels?: Map<string, any>;
    name: string;
    privateKey?: string;
    type?: PostCertificatesCreateCertificateRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostCertificatesCreateCertificateResponseNullableActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostCertificatesCreateCertificateResponseNullableActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostCertificatesCreateCertificateResponseNullableActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostCertificatesCreateCertificateResponseNullableAction extends SpeakeasyBase {
    command: string;
    error: PostCertificatesCreateCertificateResponseNullableActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostCertificatesCreateCertificateResponseNullableActionResources[];
    started: string;
    status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export declare class PostCertificatesCreateCertificateResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
export declare enum PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export declare class PostCertificatesCreateCertificateResponseCertificateStatus extends SpeakeasyBase {
    error?: PostCertificatesCreateCertificateResponseCertificateStatusError;
    issuance?: PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum;
    renewal?: PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum;
}
export declare enum PostCertificatesCreateCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class PostCertificatesCreateCertificateResponseCertificateUsedBy extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare class PostCertificatesCreateCertificateResponseCertificate extends SpeakeasyBase {
    certificate: string;
    created: string;
    domainNames: string[];
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    notValidAfter: string;
    notValidBefore: string;
    status?: PostCertificatesCreateCertificateResponseCertificateStatus;
    type?: PostCertificatesCreateCertificateResponseCertificateTypeEnum;
    usedBy: PostCertificatesCreateCertificateResponseCertificateUsedBy[];
}
export declare class PostCertificatesCreateCertificateResponse extends SpeakeasyBase {
    action?: PostCertificatesCreateCertificateResponseNullableAction;
    certificate: PostCertificatesCreateCertificateResponseCertificate;
}
export declare class PostCertificatesRequest extends SpeakeasyBase {
    request?: PostCertificatesCreateCertificateRequest;
}
export declare class PostCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    createCertificateResponse?: PostCertificatesCreateCertificateResponse;
    statusCode: number;
}
