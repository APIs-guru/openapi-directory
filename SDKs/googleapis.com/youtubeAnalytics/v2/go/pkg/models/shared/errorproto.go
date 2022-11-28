package shared

type ErrorProtoLocationTypeEnum string

const (
	ErrorProtoLocationTypeEnumPath      ErrorProtoLocationTypeEnum = "PATH"
	ErrorProtoLocationTypeEnumOther     ErrorProtoLocationTypeEnum = "OTHER"
	ErrorProtoLocationTypeEnumParameter ErrorProtoLocationTypeEnum = "PARAMETER"
)

// ErrorProto
// Describes one specific error.
type ErrorProto struct {
	Argument             []string                    `json:"argument,omitempty"`
	Code                 *string                     `json:"code,omitempty"`
	DebugInfo            *string                     `json:"debugInfo,omitempty"`
	Domain               *string                     `json:"domain,omitempty"`
	ExternalErrorMessage *string                     `json:"externalErrorMessage,omitempty"`
	Location             *string                     `json:"location,omitempty"`
	LocationType         *ErrorProtoLocationTypeEnum `json:"locationType,omitempty"`
}
