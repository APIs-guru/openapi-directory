package shared

type CertificateAttributesValidationStateEnum string

const (
	CertificateAttributesValidationStateEnumCertificateValidationStateUnspecified CertificateAttributesValidationStateEnum = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
	CertificateAttributesValidationStateEnumValidationSuccessful                  CertificateAttributesValidationStateEnum = "VALIDATION_SUCCESSFUL"
	CertificateAttributesValidationStateEnumValidationFailed                      CertificateAttributesValidationStateEnum = "VALIDATION_FAILED"
)

type CertificateAttributes struct {
	CertificateTemplate    *CertificateTemplate                      `json:"certificateTemplate"`
	Fingerprint            *string                                   `json:"fingerprint"`
	Issuer                 *string                                   `json:"issuer"`
	SerialNumber           *string                                   `json:"serialNumber"`
	Subject                *string                                   `json:"subject"`
	Thumbprint             *string                                   `json:"thumbprint"`
	ValidationState        *CertificateAttributesValidationStateEnum `json:"validationState"`
	ValidityExpirationTime *string                                   `json:"validityExpirationTime"`
	ValidityStartTime      *string                                   `json:"validityStartTime"`
}
