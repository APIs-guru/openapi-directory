package shared

// GoogleCloudDataplexV1DataProfileResultProfileField
// Represents a column field within a table schema.
type GoogleCloudDataplexV1DataProfileResultProfileField struct {
	Mode    *string                                                        `json:"mode,omitempty"`
	Name    *string                                                        `json:"name,omitempty"`
	Profile *GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo `json:"profile,omitempty"`
	Type    *string                                                        `json:"type,omitempty"`
}
