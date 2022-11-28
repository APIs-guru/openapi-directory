package shared

// GoogleLongrunningOperation
// This resource represents a long-running operation that is the result of a
// network API call.
type GoogleLongrunningOperation struct {
	Done     *bool
	Error    *GoogleRPCStatus
	Metadata map[string]interface{}
	Name     *string
	Response map[string]interface{}
}
