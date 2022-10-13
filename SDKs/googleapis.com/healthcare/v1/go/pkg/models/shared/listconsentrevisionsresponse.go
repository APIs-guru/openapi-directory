package shared

type ListConsentRevisionsResponse struct {
	Consents      []Consent `json:"consents"`
	NextPageToken *string   `json:"nextPageToken"`
}
