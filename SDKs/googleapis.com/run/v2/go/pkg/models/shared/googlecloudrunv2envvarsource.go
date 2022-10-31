package shared

type GoogleCloudRunV2EnvVarSource struct {
	SecretKeyRef *GoogleCloudRunV2SecretKeySelector `json:"secretKeyRef,omitempty"`
}
