package shared

type CertificateAttributesValidationStateEnum string

const (
	CertificateAttributesValidationStateEnumCertificateValidationStateUnspecified CertificateAttributesValidationStateEnum = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
	CertificateAttributesValidationStateEnumValidationSuccessful                  CertificateAttributesValidationStateEnum = "VALIDATION_SUCCESSFUL"
	CertificateAttributesValidationStateEnumValidationFailed                      CertificateAttributesValidationStateEnum = "VALIDATION_FAILED"
)

// CertificateAttributes
// Stores information about a certificate.
type CertificateAttributes struct {
	CertificateTemplate    *CertificateTemplate                      `json:"certificateTemplate,omitempty"`
	Fingerprint            *string                                   `json:"fingerprint,omitempty"`
	Issuer                 *string                                   `json:"issuer,omitempty"`
	SerialNumber           *string                                   `json:"serialNumber,omitempty"`
	Subject                *string                                   `json:"subject,omitempty"`
	Thumbprint             *string                                   `json:"thumbprint,omitempty"`
	ValidationState        *CertificateAttributesValidationStateEnum `json:"validationState,omitempty"`
	ValidityExpirationTime *string                                   `json:"validityExpirationTime,omitempty"`
	ValidityStartTime      *string                                   `json:"validityStartTime,omitempty"`
}
