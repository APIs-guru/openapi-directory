package shared

type ListGlossaryEntriesResponse struct {
	GlossaryEntries []GlossaryEntry `json:"glossaryEntries,omitempty"`
	NextPageToken   *string         `json:"nextPageToken,omitempty"`
}
