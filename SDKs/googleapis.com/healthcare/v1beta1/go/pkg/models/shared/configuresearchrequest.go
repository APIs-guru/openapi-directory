package shared

// ConfigureSearchRequest
// Request to configure the search parameters for the specified FHIR store.
type ConfigureSearchRequest struct {
	CanonicalUrls []string `json:"canonicalUrls,omitempty"`
	ValidateOnly  *bool    `json:"validateOnly,omitempty"`
}
