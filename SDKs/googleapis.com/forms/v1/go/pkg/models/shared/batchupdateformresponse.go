package shared

// BatchUpdateFormResponse
// Response to a BatchUpdateFormRequest.
type BatchUpdateFormResponse struct {
	Form         *Form         `json:"form,omitempty"`
	Replies      []Response    `json:"replies,omitempty"`
	WriteControl *WriteControl `json:"writeControl,omitempty"`
}
