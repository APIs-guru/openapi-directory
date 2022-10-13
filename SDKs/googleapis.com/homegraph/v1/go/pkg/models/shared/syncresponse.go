package shared

type SyncResponse struct {
	Payload   *SyncResponsePayload `json:"payload"`
	RequestID *string              `json:"requestId"`
}
