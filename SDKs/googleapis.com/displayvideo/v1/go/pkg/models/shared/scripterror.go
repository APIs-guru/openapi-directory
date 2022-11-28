package shared

type ScriptErrorErrorCodeEnum string

const (
	ScriptErrorErrorCodeEnumErrorCodeUnspecified ScriptErrorErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
	ScriptErrorErrorCodeEnumSyntaxError          ScriptErrorErrorCodeEnum = "SYNTAX_ERROR"
	ScriptErrorErrorCodeEnumDeprecatedSyntax     ScriptErrorErrorCodeEnum = "DEPRECATED_SYNTAX"
	ScriptErrorErrorCodeEnumInternalError        ScriptErrorErrorCodeEnum = "INTERNAL_ERROR"
)

// ScriptError
// An error message for a custom bidding script.
type ScriptError struct {
	Column       *string                   `json:"column,omitempty"`
	ErrorCode    *ScriptErrorErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string                   `json:"errorMessage,omitempty"`
	Line         *string                   `json:"line,omitempty"`
}
