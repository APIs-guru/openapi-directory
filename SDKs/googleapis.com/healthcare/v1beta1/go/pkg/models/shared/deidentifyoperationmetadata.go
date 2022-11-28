package shared

// DeidentifyOperationMetadata
// Details about the work the de-identify operation performed.
type DeidentifyOperationMetadata struct {
	FhirOutput *FhirOutput `json:"fhirOutput,omitempty"`
}
