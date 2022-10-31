package shared

type SyncResponse struct {
	Payload   *SyncResponsePayload `json:"payload,omitempty"`
	RequestID *string              `json:"requestId,omitempty"`
}
