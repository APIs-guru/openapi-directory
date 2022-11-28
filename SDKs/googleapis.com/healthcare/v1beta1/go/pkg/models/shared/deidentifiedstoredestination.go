package shared

// DeidentifiedStoreDestination
// Contains configuration for streaming de-identified FHIR export.
type DeidentifiedStoreDestination struct {
	Config *DeidentifyConfig `json:"config,omitempty"`
	Store  *string           `json:"store,omitempty"`
}
