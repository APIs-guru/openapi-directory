package shared

// ListFhirStoresResponse
// Lists the FHIR stores in the given dataset.
type ListFhirStoresResponse struct {
	FhirStores    []FhirStore `json:"fhirStores,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
