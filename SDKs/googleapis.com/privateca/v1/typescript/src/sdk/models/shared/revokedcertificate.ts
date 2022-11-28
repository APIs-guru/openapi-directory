import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RevokedCertificateRevocationReasonEnum {
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


// RevokedCertificate
/** 
 * Describes a revoked Certificate.
**/
export class RevokedCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=hexSerialNumber" })
  hexSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=revocationReason" })
  revocationReason?: RevokedCertificateRevocationReasonEnum;
}
