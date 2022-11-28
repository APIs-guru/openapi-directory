package shared

// SchematizedData
// The content of an HL7v2 message in a structured format as specified by a schema.
type SchematizedData struct {
	Data  *string `json:"data,omitempty"`
	Error *string `json:"error,omitempty"`
}
