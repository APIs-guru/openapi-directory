package shared

type ListConsentsResponse struct {
	Consents      []Consent `json:"consents"`
	NextPageToken *string   `json:"nextPageToken"`
}
