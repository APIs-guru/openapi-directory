package shared

type SecretEnvSource struct {
	LocalObjectReference *LocalObjectReference `json:"localObjectReference"`
	Name                 *string               `json:"name"`
	Optional             *bool                 `json:"optional"`
}
