package shared

type ListConsentStoresResponse struct {
	ConsentStores []ConsentStore `json:"consentStores,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
