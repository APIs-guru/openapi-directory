package shared

// ObjectDisplayOptions
// The display options for an object.
type ObjectDisplayOptions struct {
	Metalines          []Metaline `json:"metalines,omitempty"`
	ObjectDisplayLabel *string    `json:"objectDisplayLabel,omitempty"`
}
