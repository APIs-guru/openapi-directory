package shared

// ResponseHeader
// Elements common to every response.
type ResponseHeader struct {
	OperationID *string `json:"operationId,omitempty"`
}
