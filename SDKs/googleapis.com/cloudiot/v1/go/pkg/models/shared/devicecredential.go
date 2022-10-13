package shared

type DeviceCredential struct {
	ExpirationTime *string              `json:"expirationTime"`
	PublicKey      *PublicKeyCredential `json:"publicKey"`
}
