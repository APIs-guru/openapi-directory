package shared

// SmimeInfo
// An S/MIME email config.
type SmimeInfo struct {
	EncryptedKeyPassword *string `json:"encryptedKeyPassword,omitempty"`
	Expiration           *string `json:"expiration,omitempty"`
	ID                   *string `json:"id,omitempty"`
	IsDefault            *bool   `json:"isDefault,omitempty"`
	IssuerCn             *string `json:"issuerCn,omitempty"`
	Pem                  *string `json:"pem,omitempty"`
	Pkcs12               *string `json:"pkcs12,omitempty"`
}
