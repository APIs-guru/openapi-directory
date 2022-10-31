package shared

type BatchUpdatePresentationRequest struct {
	Requests     []Request     `json:"requests,omitempty"`
	WriteControl *WriteControl `json:"writeControl,omitempty"`
}
