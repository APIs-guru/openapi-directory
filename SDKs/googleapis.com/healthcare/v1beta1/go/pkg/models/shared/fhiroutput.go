package shared

// FhirOutput
// Details about the FHIR store to write the output to.
type FhirOutput struct {
	FhirStore *string `json:"fhirStore,omitempty"`
}
