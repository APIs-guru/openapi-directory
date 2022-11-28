package shared

// ListAcceleratorTypesResponse
// Response for ListAcceleratorTypes.
type ListAcceleratorTypesResponse struct {
	AcceleratorTypes []AcceleratorType `json:"acceleratorTypes,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	Unreachable      []string          `json:"unreachable,omitempty"`
}
