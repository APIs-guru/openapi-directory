package shared

type GoogleFirebaseAppcheckV1betaDeviceCheckConfig struct {
	KeyID         *string `json:"keyId"`
	Name          *string `json:"name"`
	PrivateKey    *string `json:"privateKey"`
	PrivateKeySet *bool   `json:"privateKeySet"`
	TokenTTL      *string `json:"tokenTtl"`
}
