package shared

type PublicKeyCertificateFormatEnum string

const (
	PublicKeyCertificateFormatEnumUnspecifiedPublicKeyCertificateFormat PublicKeyCertificateFormatEnum = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"
	PublicKeyCertificateFormatEnumX509CertificatePem                    PublicKeyCertificateFormatEnum = "X509_CERTIFICATE_PEM"
)

// PublicKeyCertificate
// A public key certificate format and data.
type PublicKeyCertificate struct {
	Certificate *string                         `json:"certificate,omitempty"`
	Format      *PublicKeyCertificateFormatEnum `json:"format,omitempty"`
	X509Details *X509CertificateDetails         `json:"x509Details,omitempty"`
}
