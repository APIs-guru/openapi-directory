package shared

type BatchUpdateFormResponse struct {
	Form         *Form         `json:"form"`
	Replies      []Response    `json:"replies"`
	WriteControl *WriteControl `json:"writeControl"`
}
