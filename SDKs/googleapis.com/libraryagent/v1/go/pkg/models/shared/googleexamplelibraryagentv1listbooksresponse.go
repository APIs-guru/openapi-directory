package shared

type GoogleExampleLibraryagentV1ListBooksResponse struct {
	Books         []GoogleExampleLibraryagentV1Book `json:"books,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
