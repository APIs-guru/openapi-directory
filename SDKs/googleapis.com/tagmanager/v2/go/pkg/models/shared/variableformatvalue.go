package shared




type VariableFormatValueCaseConversionTypeEnum string

const (
    VariableFormatValueCaseConversionTypeEnumNone VariableFormatValueCaseConversionTypeEnum = "none"
VariableFormatValueCaseConversionTypeEnumLowercase VariableFormatValueCaseConversionTypeEnum = "lowercase"
VariableFormatValueCaseConversionTypeEnumUppercase VariableFormatValueCaseConversionTypeEnum = "uppercase"
)


type VariableFormatValue struct {
    CaseConversionType *VariableFormatValueCaseConversionTypeEnum `json:"caseConversionType,omitempty"`
    ConvertFalseToValue *Parameter `json:"convertFalseToValue,omitempty"`
    ConvertNullToValue *Parameter `json:"convertNullToValue,omitempty"`
    ConvertTrueToValue *Parameter `json:"convertTrueToValue,omitempty"`
    ConvertUndefinedToValue *Parameter `json:"convertUndefinedToValue,omitempty"`
    
}

