package shared

// InlineSecret
// Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
type InlineSecret struct {
	EnvMap     map[string]string `json:"envMap,omitempty"`
	KmsKeyName *string           `json:"kmsKeyName,omitempty"`
}
