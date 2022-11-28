import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateTemplate } from "./certificatetemplate";


export enum CertificateAttributesValidationStateEnum {
    CertificateValidationStateUnspecified = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
    ValidationSuccessful = "VALIDATION_SUCCESSFUL",
    ValidationFailed = "VALIDATION_FAILED"
}


// CertificateAttributes
/** 
 * Stores information about a certificate.
**/
export class CertificateAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateTemplate" })
  certificateTemplate?: CertificateTemplate;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbprint" })
  thumbprint?: string;

  @SpeakeasyMetadata({ data: "json, name=validationState" })
  validationState?: CertificateAttributesValidationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=validityExpirationTime" })
  validityExpirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validityStartTime" })
  validityStartTime?: string;
}
