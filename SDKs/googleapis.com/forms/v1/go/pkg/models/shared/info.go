package shared

// InfoInput
// The general information for a form.
type InfoInput struct {
	Description *string `json:"description,omitempty"`
	Title       *string `json:"title,omitempty"`
}

// Info
// The general information for a form.
type Info struct {
	Description   *string `json:"description,omitempty"`
	DocumentTitle *string `json:"documentTitle,omitempty"`
	Title         *string `json:"title,omitempty"`
}
