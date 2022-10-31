package shared




type PublicKeyFormatEnum string

const (
    PublicKeyFormatEnumKeyFormatUnspecified PublicKeyFormatEnum = "KEY_FORMAT_UNSPECIFIED"
PublicKeyFormatEnumPem PublicKeyFormatEnum = "PEM"
)


type PublicKey struct {
    Format *PublicKeyFormatEnum `json:"format,omitempty"`
    Key *string `json:"key,omitempty"`
    
}

