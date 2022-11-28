package shared

// ListFormResponsesResponse
// Response to a ListFormResponsesRequest.
type ListFormResponsesResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Responses     []FormResponse `json:"responses,omitempty"`
}
