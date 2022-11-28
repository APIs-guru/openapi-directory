package shared

type RevocationDetailsRevocationStateEnum string

const (
	RevocationDetailsRevocationStateEnumRevocationReasonUnspecified    RevocationDetailsRevocationStateEnum = "REVOCATION_REASON_UNSPECIFIED"
	RevocationDetailsRevocationStateEnumKeyCompromise                  RevocationDetailsRevocationStateEnum = "KEY_COMPROMISE"
	RevocationDetailsRevocationStateEnumCertificateAuthorityCompromise RevocationDetailsRevocationStateEnum = "CERTIFICATE_AUTHORITY_COMPROMISE"
	RevocationDetailsRevocationStateEnumAffiliationChanged             RevocationDetailsRevocationStateEnum = "AFFILIATION_CHANGED"
	RevocationDetailsRevocationStateEnumSuperseded                     RevocationDetailsRevocationStateEnum = "SUPERSEDED"
	RevocationDetailsRevocationStateEnumCessationOfOperation           RevocationDetailsRevocationStateEnum = "CESSATION_OF_OPERATION"
	RevocationDetailsRevocationStateEnumCertificateHold                RevocationDetailsRevocationStateEnum = "CERTIFICATE_HOLD"
	RevocationDetailsRevocationStateEnumPrivilegeWithdrawn             RevocationDetailsRevocationStateEnum = "PRIVILEGE_WITHDRAWN"
	RevocationDetailsRevocationStateEnumAttributeAuthorityCompromise   RevocationDetailsRevocationStateEnum = "ATTRIBUTE_AUTHORITY_COMPROMISE"
)

// RevocationDetails
// Describes fields that are relavent to the revocation of a Certificate.
type RevocationDetails struct {
	RevocationState *RevocationDetailsRevocationStateEnum `json:"revocationState,omitempty"`
	RevocationTime  *string                               `json:"revocationTime,omitempty"`
}
