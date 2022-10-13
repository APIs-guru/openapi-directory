package shared

type VariableFormatValueCaseConversionTypeEnum string

const (
	VariableFormatValueCaseConversionTypeEnumNone      VariableFormatValueCaseConversionTypeEnum = "none"
	VariableFormatValueCaseConversionTypeEnumLowercase VariableFormatValueCaseConversionTypeEnum = "lowercase"
	VariableFormatValueCaseConversionTypeEnumUppercase VariableFormatValueCaseConversionTypeEnum = "uppercase"
)

type VariableFormatValue struct {
	CaseConversionType      *VariableFormatValueCaseConversionTypeEnum `json:"caseConversionType"`
	ConvertFalseToValue     *Parameter                                 `json:"convertFalseToValue"`
	ConvertNullToValue      *Parameter                                 `json:"convertNullToValue"`
	ConvertTrueToValue      *Parameter                                 `json:"convertTrueToValue"`
	ConvertUndefinedToValue *Parameter                                 `json:"convertUndefinedToValue"`
}
