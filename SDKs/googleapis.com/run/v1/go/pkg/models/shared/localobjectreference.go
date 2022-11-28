package shared

// LocalObjectReference
// Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
type LocalObjectReference struct {
	Name *string `json:"name,omitempty"`
}
