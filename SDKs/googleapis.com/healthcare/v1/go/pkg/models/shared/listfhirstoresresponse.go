package shared

type ListFhirStoresResponse struct {
	FhirStores    []FhirStore `json:"fhirStores,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
