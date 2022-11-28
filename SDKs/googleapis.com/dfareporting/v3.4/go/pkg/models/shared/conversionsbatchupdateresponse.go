package shared

// ConversionsBatchUpdateResponse
// Update Conversions Response.
type ConversionsBatchUpdateResponse struct {
	HasFailures *bool              `json:"hasFailures,omitempty"`
	Kind        *string            `json:"kind,omitempty"`
	Status      []ConversionStatus `json:"status,omitempty"`
}
