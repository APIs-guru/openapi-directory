package shared

// ListTriggersResponse
// List triggers response.
type ListTriggersResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Trigger       []Trigger `json:"trigger,omitempty"`
}
