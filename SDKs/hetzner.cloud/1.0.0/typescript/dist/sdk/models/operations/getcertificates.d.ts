import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCertificatesSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare enum GetCertificatesTypeParameterTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class GetCertificatesQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetCertificatesSortEnum;
    type?: GetCertificatesTypeParameterTypeEnum;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export declare class GetCertificatesCertificatesResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
export declare enum GetCertificatesCertificatesResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export declare class GetCertificatesCertificatesResponseCertificateStatus extends SpeakeasyBase {
    error?: GetCertificatesCertificatesResponseCertificateStatusError;
    issuance?: GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum;
    renewal?: GetCertificatesCertificatesResponseCertificateStatusRenewalEnum;
}
export declare enum GetCertificatesCertificatesResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class GetCertificatesCertificatesResponseCertificateUsedBy extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare class GetCertificatesCertificatesResponseCertificate extends SpeakeasyBase {
    certificate: string;
    created: string;
    domainNames: string[];
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    notValidAfter: string;
    notValidBefore: string;
    status?: GetCertificatesCertificatesResponseCertificateStatus;
    type?: GetCertificatesCertificatesResponseCertificateTypeEnum;
    usedBy: GetCertificatesCertificatesResponseCertificateUsedBy[];
}
export declare class GetCertificatesCertificatesResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetCertificatesCertificatesResponseMeta extends SpeakeasyBase {
    pagination: GetCertificatesCertificatesResponseMetaPagination;
}
export declare class GetCertificatesCertificatesResponse extends SpeakeasyBase {
    certificates: GetCertificatesCertificatesResponseCertificate[];
    meta?: GetCertificatesCertificatesResponseMeta;
}
export declare class GetCertificatesRequest extends SpeakeasyBase {
    queryParams: GetCertificatesQueryParams;
}
export declare class GetCertificatesResponse extends SpeakeasyBase {
    certificatesResponse?: GetCertificatesCertificatesResponse;
    contentType: string;
    statusCode: number;
}
