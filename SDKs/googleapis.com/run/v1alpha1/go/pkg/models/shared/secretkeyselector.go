package shared

type SecretKeySelector struct {
	Key                  *string               `json:"key"`
	LocalObjectReference *LocalObjectReference `json:"localObjectReference"`
	Name                 *string               `json:"name"`
	Optional             *bool                 `json:"optional"`
}
