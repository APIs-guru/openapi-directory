package shared

type ListGlossariesResponse struct {
	Glossaries    []Glossary `json:"glossaries"`
	NextPageToken *string    `json:"nextPageToken"`
}
