import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateTemplate } from "./certificatetemplate";
export declare enum CertificateAttributesValidationStateEnum {
    CertificateValidationStateUnspecified = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
    ValidationSuccessful = "VALIDATION_SUCCESSFUL",
    ValidationFailed = "VALIDATION_FAILED"
}
/**
 * Stores information about a certificate.
**/
export declare class CertificateAttributes extends SpeakeasyBase {
    certificateTemplate?: CertificateTemplate;
    fingerprint?: string;
    issuer?: string;
    serialNumber?: string;
    subject?: string;
    thumbprint?: string;
    validationState?: CertificateAttributesValidationStateEnum;
    validityExpirationTime?: string;
    validityStartTime?: string;
}
