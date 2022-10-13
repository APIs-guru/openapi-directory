package shared

type SmimeInfo struct {
	EncryptedKeyPassword *string `json:"encryptedKeyPassword"`
	Expiration           *string `json:"expiration"`
	ID                   *string `json:"id"`
	IsDefault            *bool   `json:"isDefault"`
	IssuerCn             *string `json:"issuerCn"`
	Pem                  *string `json:"pem"`
	Pkcs12               *string `json:"pkcs12"`
}
