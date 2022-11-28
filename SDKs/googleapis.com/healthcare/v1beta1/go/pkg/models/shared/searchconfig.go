package shared

// SearchConfig
// Contains the configuration for FHIR search.
type SearchConfig struct {
	SearchParameters []SearchParameter `json:"searchParameters,omitempty"`
}
