package shared

// GetGuestAttributesRequest
// Request for GetGuestAttributes.
type GetGuestAttributesRequest struct {
	QueryPath *string  `json:"queryPath,omitempty"`
	WorkerIds []string `json:"workerIds,omitempty"`
}
