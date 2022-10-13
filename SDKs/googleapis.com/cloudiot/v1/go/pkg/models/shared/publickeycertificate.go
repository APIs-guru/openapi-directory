package shared

type PublicKeyCertificateFormatEnum string

const (
	PublicKeyCertificateFormatEnumUnspecifiedPublicKeyCertificateFormat PublicKeyCertificateFormatEnum = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"
	PublicKeyCertificateFormatEnumX509CertificatePem                    PublicKeyCertificateFormatEnum = "X509_CERTIFICATE_PEM"
)

type PublicKeyCertificate struct {
	Certificate *string                         `json:"certificate"`
	Format      *PublicKeyCertificateFormatEnum `json:"format"`
	X509Details *X509CertificateDetails         `json:"x509Details"`
}
