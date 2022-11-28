package shared

// GoogleLongrunningOperation
// This resource represents a long-running operation that is the result of a network API call.
type GoogleLongrunningOperation struct {
	Done     *bool                  `json:"done,omitempty"`
	Error    *GoogleRPCStatus       `json:"error,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty"`
	Name     *string                `json:"name,omitempty"`
	Response map[string]interface{} `json:"response,omitempty"`
}
