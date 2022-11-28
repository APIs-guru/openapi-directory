package shared

// DeleteConnectionRequest
// Request to delete a private service access connection. The call will fail if there are any managed service instances using this connection.
type DeleteConnectionRequest struct {
	ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
}
