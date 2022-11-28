package shared

// Locale
// A location/region designation for language.
type Locale struct {
	ID     *string  `json:"id,omitempty"`
	Name   *string  `json:"name,omitempty"`
	Region *string  `json:"region,omitempty"`
	Tags   []string `json:"tags,omitempty"`
}
