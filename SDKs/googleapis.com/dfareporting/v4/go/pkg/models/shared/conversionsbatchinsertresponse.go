package shared

// ConversionsBatchInsertResponse
// Insert Conversions Response.
type ConversionsBatchInsertResponse struct {
	HasFailures *bool              `json:"hasFailures,omitempty"`
	Kind        *string            `json:"kind,omitempty"`
	Status      []ConversionStatus `json:"status,omitempty"`
}
