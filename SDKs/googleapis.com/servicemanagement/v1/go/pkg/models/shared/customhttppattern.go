package shared

// CustomHTTPPattern
// A custom pattern is used for defining custom HTTP verb.
type CustomHTTPPattern struct {
	Kind *string `json:"kind,omitempty"`
	Path *string `json:"path,omitempty"`
}
