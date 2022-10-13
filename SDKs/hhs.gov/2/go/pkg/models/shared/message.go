package shared

type Message struct {
	ErrorCode    *string `json:"errorCode"`
	ErrorDetail  *string `json:"errorDetail"`
	ErrorMessage *string `json:"errorMessage"`
	UserMessage  *string `json:"userMessage"`
}
