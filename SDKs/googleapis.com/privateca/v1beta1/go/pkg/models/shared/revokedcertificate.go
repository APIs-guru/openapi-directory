package shared

type RevokedCertificateRevocationReasonEnum string

const (
	RevokedCertificateRevocationReasonEnumRevocationReasonUnspecified    RevokedCertificateRevocationReasonEnum = "REVOCATION_REASON_UNSPECIFIED"
	RevokedCertificateRevocationReasonEnumKeyCompromise                  RevokedCertificateRevocationReasonEnum = "KEY_COMPROMISE"
	RevokedCertificateRevocationReasonEnumCertificateAuthorityCompromise RevokedCertificateRevocationReasonEnum = "CERTIFICATE_AUTHORITY_COMPROMISE"
	RevokedCertificateRevocationReasonEnumAffiliationChanged             RevokedCertificateRevocationReasonEnum = "AFFILIATION_CHANGED"
	RevokedCertificateRevocationReasonEnumSuperseded                     RevokedCertificateRevocationReasonEnum = "SUPERSEDED"
	RevokedCertificateRevocationReasonEnumCessationOfOperation           RevokedCertificateRevocationReasonEnum = "CESSATION_OF_OPERATION"
	RevokedCertificateRevocationReasonEnumCertificateHold                RevokedCertificateRevocationReasonEnum = "CERTIFICATE_HOLD"
	RevokedCertificateRevocationReasonEnumPrivilegeWithdrawn             RevokedCertificateRevocationReasonEnum = "PRIVILEGE_WITHDRAWN"
	RevokedCertificateRevocationReasonEnumAttributeAuthorityCompromise   RevokedCertificateRevocationReasonEnum = "ATTRIBUTE_AUTHORITY_COMPROMISE"
)

// RevokedCertificate
// Describes a revoked Certificate.
type RevokedCertificate struct {
	Certificate      *string                                 `json:"certificate,omitempty"`
	HexSerialNumber  *string                                 `json:"hexSerialNumber,omitempty"`
	RevocationReason *RevokedCertificateRevocationReasonEnum `json:"revocationReason,omitempty"`
}
