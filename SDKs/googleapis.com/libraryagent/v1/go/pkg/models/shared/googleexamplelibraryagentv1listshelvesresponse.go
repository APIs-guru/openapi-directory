package shared

type GoogleExampleLibraryagentV1ListShelvesResponse struct {
	NextPageToken *string                            `json:"nextPageToken"`
	Shelves       []GoogleExampleLibraryagentV1Shelf `json:"shelves"`
}
