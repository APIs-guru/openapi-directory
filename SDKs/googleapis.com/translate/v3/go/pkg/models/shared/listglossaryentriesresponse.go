package shared

// ListGlossaryEntriesResponse
// Response message for ListGlossaryEntries
type ListGlossaryEntriesResponse struct {
	GlossaryEntries []GlossaryEntry `json:"glossaryEntries,omitempty"`
	NextPageToken   *string         `json:"nextPageToken,omitempty"`
}
