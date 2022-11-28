import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RevokeCertificateRequestReasonEnum {
    RevocationReasonUnspecified = "REVOCATION_REASON_UNSPECIFIED",
    KeyCompromise = "KEY_COMPROMISE",
    CertificateAuthorityCompromise = "CERTIFICATE_AUTHORITY_COMPROMISE",
    AffiliationChanged = "AFFILIATION_CHANGED",
    Superseded = "SUPERSEDED",
    CessationOfOperation = "CESSATION_OF_OPERATION",
    CertificateHold = "CERTIFICATE_HOLD",
    PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN",
    AttributeAuthorityCompromise = "ATTRIBUTE_AUTHORITY_COMPROMISE"
}
/**
 * Request message for CertificateAuthorityService.RevokeCertificate.
**/
export declare class RevokeCertificateRequest extends SpeakeasyBase {
    reason?: RevokeCertificateRequestReasonEnum;
    requestId?: string;
}
