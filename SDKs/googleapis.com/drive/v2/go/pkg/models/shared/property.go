package shared

// Property
// A key-value pair attached to a file that is either public or private to an application.
// The following limits apply to file properties:
// - Maximum of 100 properties total per file
// - Maximum of 30 private properties per app
// - Maximum of 30 public properties
// - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
type Property struct {
	Etag       *string `json:"etag,omitempty"`
	Key        *string `json:"key,omitempty"`
	Kind       *string `json:"kind,omitempty"`
	SelfLink   *string `json:"selfLink,omitempty"`
	Value      *string `json:"value,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}
