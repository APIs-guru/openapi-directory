package shared

// TranslationsListResponse
// The main language translation response message.
type TranslationsListResponse struct {
	Translations []TranslationsResource `json:"translations,omitempty"`
}
