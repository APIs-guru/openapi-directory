package shared

// ListOperationsResponse
// ListOperationsResponse is the result of ListOperationsRequest.
type ListOperationsResponse struct {
	MissingZones []string    `json:"missingZones,omitempty"`
	Operations   []Operation `json:"operations,omitempty"`
}
