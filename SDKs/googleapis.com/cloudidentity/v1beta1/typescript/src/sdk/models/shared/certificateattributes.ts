import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateTemplate } from "./certificatetemplate";

export enum CertificateAttributesValidationStateEnum {
    CertificateValidationStateUnspecified = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
,    ValidationSuccessful = "VALIDATION_SUCCESSFUL"
,    ValidationFailed = "VALIDATION_FAILED"
}


// CertificateAttributes
/** 
 * Stores information about a certificate.
**/
export class CertificateAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateTemplate" })
  certificateTemplate?: CertificateTemplate;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=thumbprint" })
  thumbprint?: string;

  @Metadata({ data: "json, name=validationState" })
  validationState?: CertificateAttributesValidationStateEnum;

  @Metadata({ data: "json, name=validityExpirationTime" })
  validityExpirationTime?: string;

  @Metadata({ data: "json, name=validityStartTime" })
  validityStartTime?: string;
}
