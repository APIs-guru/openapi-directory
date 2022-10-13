package shared

type PublicKeyCredentialFormatEnum string

const (
	PublicKeyCredentialFormatEnumUnspecifiedPublicKeyFormat PublicKeyCredentialFormatEnum = "UNSPECIFIED_PUBLIC_KEY_FORMAT"
	PublicKeyCredentialFormatEnumRsaPem                     PublicKeyCredentialFormatEnum = "RSA_PEM"
	PublicKeyCredentialFormatEnumRsaX509Pem                 PublicKeyCredentialFormatEnum = "RSA_X509_PEM"
	PublicKeyCredentialFormatEnumEs256Pem                   PublicKeyCredentialFormatEnum = "ES256_PEM"
	PublicKeyCredentialFormatEnumEs256X509Pem               PublicKeyCredentialFormatEnum = "ES256_X509_PEM"
)

type PublicKeyCredential struct {
	Format *PublicKeyCredentialFormatEnum `json:"format"`
	Key    *string                        `json:"key"`
}
