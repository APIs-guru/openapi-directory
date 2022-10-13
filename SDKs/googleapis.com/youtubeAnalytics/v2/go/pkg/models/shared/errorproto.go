package shared

type ErrorProtoLocationTypeEnum string

const (
	ErrorProtoLocationTypeEnumPath      ErrorProtoLocationTypeEnum = "PATH"
	ErrorProtoLocationTypeEnumOther     ErrorProtoLocationTypeEnum = "OTHER"
	ErrorProtoLocationTypeEnumParameter ErrorProtoLocationTypeEnum = "PARAMETER"
)

type ErrorProto struct {
	Argument             []string                    `json:"argument"`
	Code                 *string                     `json:"code"`
	DebugInfo            *string                     `json:"debugInfo"`
	Domain               *string                     `json:"domain"`
	ExternalErrorMessage *string                     `json:"externalErrorMessage"`
	Location             *string                     `json:"location"`
	LocationType         *ErrorProtoLocationTypeEnum `json:"locationType"`
}
