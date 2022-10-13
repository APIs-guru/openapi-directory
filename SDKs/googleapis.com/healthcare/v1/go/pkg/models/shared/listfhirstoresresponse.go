package shared

type ListFhirStoresResponse struct {
	FhirStores    []FhirStore `json:"fhirStores"`
	NextPageToken *string     `json:"nextPageToken"`
}
