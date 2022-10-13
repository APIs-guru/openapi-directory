package shared

type Secret struct {
	CipherText *string `json:"cipherText"`
	KeyName    *string `json:"keyName"`
}
