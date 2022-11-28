package shared

// ListContainersResponse
// List Containers Response.
type ListContainersResponse struct {
	Containers []Container `json:"containers,omitempty"`
}
