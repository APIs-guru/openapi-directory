package shared

type LanguagesListResponse struct {
	Kind      *string    `json:"kind,omitempty"`
	Languages []Language `json:"languages,omitempty"`
}
