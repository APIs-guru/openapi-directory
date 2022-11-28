package shared

// ConfigMapKeySelector
// Not supported by Cloud Run.
type ConfigMapKeySelector struct {
	Key                  *string               `json:"key,omitempty"`
	LocalObjectReference *LocalObjectReference `json:"localObjectReference,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Optional             *bool                 `json:"optional,omitempty"`
}
