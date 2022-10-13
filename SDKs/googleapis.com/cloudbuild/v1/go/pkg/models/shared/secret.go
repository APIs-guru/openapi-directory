package shared

type Secret struct {
	KmsKeyName *string           `json:"kmsKeyName"`
	SecretEnv  map[string]string `json:"secretEnv"`
}
