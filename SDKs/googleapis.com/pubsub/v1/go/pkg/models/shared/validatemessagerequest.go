package shared

type ValidateMessageRequestEncodingEnum string

const (
	ValidateMessageRequestEncodingEnumEncodingUnspecified ValidateMessageRequestEncodingEnum = "ENCODING_UNSPECIFIED"
	ValidateMessageRequestEncodingEnumJSON                ValidateMessageRequestEncodingEnum = "JSON"
	ValidateMessageRequestEncodingEnumBinary              ValidateMessageRequestEncodingEnum = "BINARY"
)

// ValidateMessageRequestInput
// Request for the `ValidateMessage` method.
type ValidateMessageRequestInput struct {
	Encoding *ValidateMessageRequestEncodingEnum `json:"encoding,omitempty"`
	Message  *string                             `json:"message,omitempty"`
	Name     *string                             `json:"name,omitempty"`
	Schema   *SchemaInput                        `json:"schema,omitempty"`
}
