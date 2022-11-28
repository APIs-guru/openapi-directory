package shared

// ListGlossariesResponse
// Response message for ListGlossaries.
type ListGlossariesResponse struct {
	Glossaries    []Glossary `json:"glossaries,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
