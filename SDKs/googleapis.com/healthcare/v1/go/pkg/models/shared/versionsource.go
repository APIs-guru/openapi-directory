package shared

// VersionSource
// Describes a selector for extracting and matching an MSH field to a value.
type VersionSource struct {
	MshField *string `json:"mshField,omitempty"`
	Value    *string `json:"value,omitempty"`
}
