package shared

type Secret struct {
	CipherText *string `json:"cipherText,omitempty"`
	KeyName    *string `json:"keyName,omitempty"`
}
