package shared

// LanguagesListResponse
// Language List Response
type LanguagesListResponse struct {
	Kind      *string    `json:"kind,omitempty"`
	Languages []Language `json:"languages,omitempty"`
}
