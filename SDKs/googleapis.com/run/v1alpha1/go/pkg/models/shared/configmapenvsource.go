package shared

type ConfigMapEnvSource struct {
	LocalObjectReference *LocalObjectReference `json:"localObjectReference"`
	Name                 *string               `json:"name"`
	Optional             *bool                 `json:"optional"`
}
