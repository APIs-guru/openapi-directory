import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCertificatesIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export declare class GetCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
export declare enum GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export declare class GetCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
    error?: GetCertificatesIdCertificateResponseCertificateStatusError;
    issuance?: GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;
    renewal?: GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}
export declare enum GetCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class GetCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare class GetCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
    certificate: string;
    created: string;
    domainNames: string[];
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    notValidAfter: string;
    notValidBefore: string;
    status?: GetCertificatesIdCertificateResponseCertificateStatus;
    type?: GetCertificatesIdCertificateResponseCertificateTypeEnum;
    usedBy: GetCertificatesIdCertificateResponseCertificateUsedBy[];
}
export declare class GetCertificatesIdCertificateResponse extends SpeakeasyBase {
    certificate: GetCertificatesIdCertificateResponseCertificate;
}
export declare class GetCertificatesIdRequest extends SpeakeasyBase {
    pathParams: GetCertificatesIdPathParams;
}
export declare class GetCertificatesIdResponse extends SpeakeasyBase {
    certificateResponse?: GetCertificatesIdCertificateResponse;
    contentType: string;
    statusCode: number;
}
