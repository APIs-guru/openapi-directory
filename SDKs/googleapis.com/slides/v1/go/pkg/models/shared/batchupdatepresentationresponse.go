package shared

type BatchUpdatePresentationResponse struct {
	PresentationID *string       `json:"presentationId"`
	Replies        []Response    `json:"replies"`
	WriteControl   *WriteControl `json:"writeControl"`
}
