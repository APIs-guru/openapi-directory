package shared

// ModelState
// State common to all model types. Includes publishing and validation information.
type ModelState struct {
	Published       *bool   `json:"published,omitempty"`
	ValidationError *Status `json:"validationError,omitempty"`
}
