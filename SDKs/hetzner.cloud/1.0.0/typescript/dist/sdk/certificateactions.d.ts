import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CertificateActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCertificatesIdActions - Get all Actions for a Certificate
     *
     * Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     *
     * Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.
     *
    **/
    getCertificatesIdActions(req: operations.GetCertificatesIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificatesIdActionsResponse>;
    /**
     * getCertificatesIdActionsActionId - Get an Action for a Certificate
     *
     * Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.
    **/
    getCertificatesIdActionsActionId(req: operations.GetCertificatesIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificatesIdActionsActionIdResponse>;
    /**
     * postCertificatesIdActionsRetry - Retry Issuance or Renewal
     *
     * Retry a failed Certificate issuance or renewal.
     *
     * Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.
     *
     * #### Call specific error codes
     *
     * | Code                                                    | Description                                                               |
     * |---------------------------------------------------------|---------------------------------------------------------------------------|
     * | `caa_record_does_not_allow_ca`                          | CAA record does not allow certificate authority                           |
     * | `ca_dns_validation_failed`                              | Certificate Authority: DNS validation failed                              |
     * | `ca_too_many_authorizations_failed_recently`            | Certificate Authority: Too many authorizations failed recently            |
     * | `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
     * | `ca_too_many_duplicate_certificates`                    | Certificate Authority: Too many duplicate certificates                    |
     * | `could_not_verify_domain_delegated_to_zone`             | Could not verify domain delegated to zone                                 |
     * | `dns_zone_not_found`                                    | DNS zone not found                                                        |
     * | `dns_zone_is_secondary_zone`                            | DNS zone is a secondary zone                                              |
     *
    **/
    postCertificatesIdActionsRetry(req: operations.PostCertificatesIdActionsRetryRequest, config?: AxiosRequestConfig): Promise<operations.PostCertificatesIdActionsRetryResponse>;
}
