package shared

type ShaCertificateCertTypeEnum string

const (
	ShaCertificateCertTypeEnumShaCertificateTypeUnspecified ShaCertificateCertTypeEnum = "SHA_CERTIFICATE_TYPE_UNSPECIFIED"
	ShaCertificateCertTypeEnumSha1                          ShaCertificateCertTypeEnum = "SHA_1"
	ShaCertificateCertTypeEnumSha256                        ShaCertificateCertTypeEnum = "SHA_256"
)

// ShaCertificate
// A SHA-1 or SHA-256 certificate associated with the AndroidApp.
type ShaCertificate struct {
	CertType *ShaCertificateCertTypeEnum `json:"certType,omitempty"`
	Name     *string                     `json:"name,omitempty"`
	ShaHash  *string                     `json:"shaHash,omitempty"`
}
