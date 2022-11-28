import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RevokeCertificateRequestReasonEnum {
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


// RevokeCertificateRequest
/** 
 * Request message for CertificateAuthorityService.RevokeCertificate.
**/
export class RevokeCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: RevokeCertificateRequestReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
