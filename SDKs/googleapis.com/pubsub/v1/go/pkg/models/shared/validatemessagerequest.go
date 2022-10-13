package shared

type ValidateMessageRequestEncodingEnum string

const (
	ValidateMessageRequestEncodingEnumEncodingUnspecified ValidateMessageRequestEncodingEnum = "ENCODING_UNSPECIFIED"
	ValidateMessageRequestEncodingEnumJSON                ValidateMessageRequestEncodingEnum = "JSON"
	ValidateMessageRequestEncodingEnumBinary              ValidateMessageRequestEncodingEnum = "BINARY"
)

type ValidateMessageRequest struct {
	Encoding *ValidateMessageRequestEncodingEnum `json:"encoding"`
	Message  *string                             `json:"message"`
	Name     *string                             `json:"name"`
	Schema   *Schema                             `json:"schema"`
}
