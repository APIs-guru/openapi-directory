package shared

// GoogleExampleLibraryagentV1ListShelvesResponse
// Response message for LibraryAgent.ListShelves.
type GoogleExampleLibraryagentV1ListShelvesResponse struct {
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
	Shelves       []GoogleExampleLibraryagentV1Shelf `json:"shelves,omitempty"`
}
