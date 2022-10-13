package shared

type GoogleCloudRunV2SecretKeySelector struct {
	Secret  *string `json:"secret"`
	Version *string `json:"version"`
}
