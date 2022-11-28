package shared

type SchemaSettingsEncodingEnum string

const (
	SchemaSettingsEncodingEnumEncodingUnspecified SchemaSettingsEncodingEnum = "ENCODING_UNSPECIFIED"
	SchemaSettingsEncodingEnumJSON                SchemaSettingsEncodingEnum = "JSON"
	SchemaSettingsEncodingEnumBinary              SchemaSettingsEncodingEnum = "BINARY"
)

// SchemaSettings
// Settings for validating messages published against a schema.
type SchemaSettings struct {
	Encoding        *SchemaSettingsEncodingEnum `json:"encoding,omitempty"`
	FirstRevisionID *string                     `json:"firstRevisionId,omitempty"`
	LastRevisionID  *string                     `json:"lastRevisionId,omitempty"`
	Schema          *string                     `json:"schema,omitempty"`
}
