package shared

type QueryResponse struct {
	Payload   *QueryResponsePayload `json:"payload"`
	RequestID *string               `json:"requestId"`
}
