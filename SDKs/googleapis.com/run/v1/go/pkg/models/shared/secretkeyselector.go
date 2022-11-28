package shared

// SecretKeySelector
// SecretKeySelector selects a key of a Secret.
type SecretKeySelector struct {
	Key                  *string               `json:"key,omitempty"`
	LocalObjectReference *LocalObjectReference `json:"localObjectReference,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Optional             *bool                 `json:"optional,omitempty"`
}
