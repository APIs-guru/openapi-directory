package shared

type RevokeCertificateRequestReasonEnum string

const (
	RevokeCertificateRequestReasonEnumRevocationReasonUnspecified    RevokeCertificateRequestReasonEnum = "REVOCATION_REASON_UNSPECIFIED"
	RevokeCertificateRequestReasonEnumKeyCompromise                  RevokeCertificateRequestReasonEnum = "KEY_COMPROMISE"
	RevokeCertificateRequestReasonEnumCertificateAuthorityCompromise RevokeCertificateRequestReasonEnum = "CERTIFICATE_AUTHORITY_COMPROMISE"
	RevokeCertificateRequestReasonEnumAffiliationChanged             RevokeCertificateRequestReasonEnum = "AFFILIATION_CHANGED"
	RevokeCertificateRequestReasonEnumSuperseded                     RevokeCertificateRequestReasonEnum = "SUPERSEDED"
	RevokeCertificateRequestReasonEnumCessationOfOperation           RevokeCertificateRequestReasonEnum = "CESSATION_OF_OPERATION"
	RevokeCertificateRequestReasonEnumCertificateHold                RevokeCertificateRequestReasonEnum = "CERTIFICATE_HOLD"
	RevokeCertificateRequestReasonEnumPrivilegeWithdrawn             RevokeCertificateRequestReasonEnum = "PRIVILEGE_WITHDRAWN"
	RevokeCertificateRequestReasonEnumAttributeAuthorityCompromise   RevokeCertificateRequestReasonEnum = "ATTRIBUTE_AUTHORITY_COMPROMISE"
)

type RevokeCertificateRequest struct {
	Reason    *RevokeCertificateRequestReasonEnum `json:"reason,omitempty"`
	RequestID *string                             `json:"requestId,omitempty"`
}
