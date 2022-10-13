package shared

type BatchUpdatePresentationRequest struct {
	Requests     []Request     `json:"requests"`
	WriteControl *WriteControl `json:"writeControl"`
}
