package shared

type GoogleExampleLibraryagentV1ListBooksResponse struct {
	Books         []GoogleExampleLibraryagentV1Book `json:"books"`
	NextPageToken *string                           `json:"nextPageToken"`
}
