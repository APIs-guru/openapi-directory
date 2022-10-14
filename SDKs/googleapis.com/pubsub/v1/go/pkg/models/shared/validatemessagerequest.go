package shared

type ValidateMessageRequestEncodingEnum string

const (
	ValidateMessageRequestEncodingEnumEncodingUnspecified ValidateMessageRequestEncodingEnum = "ENCODING_UNSPECIFIED"
	ValidateMessageRequestEncodingEnumJSON                ValidateMessageRequestEncodingEnum = "JSON"
	ValidateMessageRequestEncodingEnumBinary              ValidateMessageRequestEncodingEnum = "BINARY"
)

type ValidateMessageRequest struct {
	Encoding *ValidateMessageRequestEncodingEnum `json:"encoding,omitempty"`
	Message  *string                             `json:"message,omitempty"`
	Name     *string                             `json:"name,omitempty"`
	Schema   *Schema                             `json:"schema,omitempty"`
}
