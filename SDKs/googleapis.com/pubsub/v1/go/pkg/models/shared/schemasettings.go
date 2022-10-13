package shared

type SchemaSettingsEncodingEnum string

const (
	SchemaSettingsEncodingEnumEncodingUnspecified SchemaSettingsEncodingEnum = "ENCODING_UNSPECIFIED"
	SchemaSettingsEncodingEnumJSON                SchemaSettingsEncodingEnum = "JSON"
	SchemaSettingsEncodingEnumBinary              SchemaSettingsEncodingEnum = "BINARY"
)

type SchemaSettings struct {
	Encoding        *SchemaSettingsEncodingEnum `json:"encoding"`
	FirstRevisionID *string                     `json:"firstRevisionId"`
	LastRevisionID  *string                     `json:"lastRevisionId"`
	Schema          *string                     `json:"schema"`
}
