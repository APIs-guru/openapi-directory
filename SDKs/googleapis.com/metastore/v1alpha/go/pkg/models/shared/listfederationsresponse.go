package shared

// ListFederationsResponse
// Response message for ListFederations
type ListFederationsResponse struct {
	Federations   []Federation `json:"federations,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
