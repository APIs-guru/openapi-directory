import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutCertificatesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCertificatesIdUpdateCertificateRequest extends SpeakeasyBase {
    labels?: Map<string, any>;
    name?: string;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export declare class PutCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
export declare enum PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export declare class PutCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
    error?: PutCertificatesIdCertificateResponseCertificateStatusError;
    issuance?: PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;
    renewal?: PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}
export declare enum PutCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class PutCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare class PutCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
    certificate: string;
    created: string;
    domainNames: string[];
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    notValidAfter: string;
    notValidBefore: string;
    status?: PutCertificatesIdCertificateResponseCertificateStatus;
    type?: PutCertificatesIdCertificateResponseCertificateTypeEnum;
    usedBy: PutCertificatesIdCertificateResponseCertificateUsedBy[];
}
export declare class PutCertificatesIdCertificateResponse extends SpeakeasyBase {
    certificate: PutCertificatesIdCertificateResponseCertificate;
}
export declare class PutCertificatesIdRequest extends SpeakeasyBase {
    pathParams: PutCertificatesIdPathParams;
    request?: PutCertificatesIdUpdateCertificateRequest;
}
export declare class PutCertificatesIdResponse extends SpeakeasyBase {
    certificateResponse?: PutCertificatesIdCertificateResponse;
    contentType: string;
    statusCode: number;
}
