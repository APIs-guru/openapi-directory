package shared

// BatchUpdatePresentationRequest
// Request message for PresentationsService.BatchUpdatePresentation.
type BatchUpdatePresentationRequest struct {
	Requests     []Request     `json:"requests,omitempty"`
	WriteControl *WriteControl `json:"writeControl,omitempty"`
}
