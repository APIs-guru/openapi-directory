package shared

type ErrorValueTypeEnum string

const (
	ErrorValueTypeEnumErrorTypeUnspecified ErrorValueTypeEnum = "ERROR_TYPE_UNSPECIFIED"
	ErrorValueTypeEnumError                ErrorValueTypeEnum = "ERROR"
	ErrorValueTypeEnumNullValue            ErrorValueTypeEnum = "NULL_VALUE"
	ErrorValueTypeEnumDivideByZero         ErrorValueTypeEnum = "DIVIDE_BY_ZERO"
	ErrorValueTypeEnumValue                ErrorValueTypeEnum = "VALUE"
	ErrorValueTypeEnumRef                  ErrorValueTypeEnum = "REF"
	ErrorValueTypeEnumName                 ErrorValueTypeEnum = "NAME"
	ErrorValueTypeEnumNum                  ErrorValueTypeEnum = "NUM"
	ErrorValueTypeEnumNa                   ErrorValueTypeEnum = "N_A"
	ErrorValueTypeEnumLoading              ErrorValueTypeEnum = "LOADING"
)

// ErrorValue
// An error in a cell.
type ErrorValue struct {
	Message *string             `json:"message,omitempty"`
	Type    *ErrorValueTypeEnum `json:"type,omitempty"`
}
