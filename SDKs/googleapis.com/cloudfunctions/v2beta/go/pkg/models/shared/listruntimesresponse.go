package shared

// ListRuntimesResponse
// Response for the `ListRuntimes` method.
type ListRuntimesResponse struct {
	Runtimes []Runtime `json:"runtimes,omitempty"`
}
