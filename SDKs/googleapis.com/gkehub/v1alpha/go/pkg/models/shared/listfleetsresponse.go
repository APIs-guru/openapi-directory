package shared

// ListFleetsResponse
// Response message for the `GkeHub.ListFleetsResponse` method.
type ListFleetsResponse struct {
	Fleets        []Fleet `json:"fleets,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
