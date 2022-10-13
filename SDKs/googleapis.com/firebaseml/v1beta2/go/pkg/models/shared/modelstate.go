package shared

type ModelState struct {
	Published       *bool   `json:"published"`
	ValidationError *Status `json:"validationError"`
}
