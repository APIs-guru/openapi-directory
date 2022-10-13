package shared

type ListGlossaryEntriesResponse struct {
	GlossaryEntries []GlossaryEntry `json:"glossaryEntries"`
	NextPageToken   *string         `json:"nextPageToken"`
}
