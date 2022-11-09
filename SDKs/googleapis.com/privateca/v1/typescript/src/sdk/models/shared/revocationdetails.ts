import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RevocationDetailsRevocationStateEnum {
    RevocationReasonUnspecified = "REVOCATION_REASON_UNSPECIFIED"
,    KeyCompromise = "KEY_COMPROMISE"
,    CertificateAuthorityCompromise = "CERTIFICATE_AUTHORITY_COMPROMISE"
,    AffiliationChanged = "AFFILIATION_CHANGED"
,    Superseded = "SUPERSEDED"
,    CessationOfOperation = "CESSATION_OF_OPERATION"
,    CertificateHold = "CERTIFICATE_HOLD"
,    PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN"
,    AttributeAuthorityCompromise = "ATTRIBUTE_AUTHORITY_COMPROMISE"
}


// RevocationDetails
/** 
 * Describes fields that are relavent to the revocation of a Certificate.
**/
export class RevocationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=revocationState" })
  revocationState?: RevocationDetailsRevocationStateEnum;

  @Metadata({ data: "json, name=revocationTime" })
  revocationTime?: string;
}
