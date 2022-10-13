package shared

type PsuData struct {
	AdditionalEncryptedPassword *string `json:"additionalEncryptedPassword"`
	AdditionalPassword          *string `json:"additionalPassword"`
	EncryptedPassword           *string `json:"encryptedPassword"`
	Password                    *string `json:"password"`
}
