package shared

type ListConsentStoresResponse struct {
	ConsentStores []ConsentStore `json:"consentStores"`
	NextPageToken *string        `json:"nextPageToken"`
}
