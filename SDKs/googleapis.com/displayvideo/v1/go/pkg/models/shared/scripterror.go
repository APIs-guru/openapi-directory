package shared

type ScriptErrorErrorCodeEnum string

const (
	ScriptErrorErrorCodeEnumErrorCodeUnspecified ScriptErrorErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
	ScriptErrorErrorCodeEnumSyntaxError          ScriptErrorErrorCodeEnum = "SYNTAX_ERROR"
	ScriptErrorErrorCodeEnumDeprecatedSyntax     ScriptErrorErrorCodeEnum = "DEPRECATED_SYNTAX"
	ScriptErrorErrorCodeEnumInternalError        ScriptErrorErrorCodeEnum = "INTERNAL_ERROR"
)

type ScriptError struct {
	Column       *string                   `json:"column"`
	ErrorCode    *ScriptErrorErrorCodeEnum `json:"errorCode"`
	ErrorMessage *string                   `json:"errorMessage"`
	Line         *string                   `json:"line"`
}
