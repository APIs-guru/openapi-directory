package shared

type QueryResponse struct {
	Payload   *QueryResponsePayload `json:"payload,omitempty"`
	RequestID *string               `json:"requestId,omitempty"`
}
