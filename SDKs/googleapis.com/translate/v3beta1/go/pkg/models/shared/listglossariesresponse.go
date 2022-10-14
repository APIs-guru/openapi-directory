package shared

type ListGlossariesResponse struct {
	Glossaries    []Glossary `json:"glossaries,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
