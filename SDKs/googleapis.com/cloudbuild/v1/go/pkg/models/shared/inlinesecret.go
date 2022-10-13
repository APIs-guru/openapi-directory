package shared

type InlineSecret struct {
	EnvMap     map[string]string `json:"envMap"`
	KmsKeyName *string           `json:"kmsKeyName"`
}
