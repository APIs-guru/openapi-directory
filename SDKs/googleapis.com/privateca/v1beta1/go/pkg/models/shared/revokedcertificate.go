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

type RevokedCertificate struct {
	Certificate      *string                                 `json:"certificate"`
	HexSerialNumber  *string                                 `json:"hexSerialNumber"`
	RevocationReason *RevokedCertificateRevocationReasonEnum `json:"revocationReason"`
}
