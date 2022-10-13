package shared

type EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum string

const (
	EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumDefault         EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum = "DEFAULT"
	EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumStringMultiLine EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum = "STRING_MULTI_LINE"
	EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumNumberSlider    EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum = "NUMBER_SLIDER"
	EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnumBooleanToggle   EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum = "BOOLEAN_TOGGLE"
)

type EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum string

const (
	EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumDefaultNotParameterName EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum = "DEFAULT_NOT_PARAMETER_NAME"
	EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumIsParameterName         EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum = "IS_PARAMETER_NAME"
	EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumKeyIsParameterName      EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum = "KEY_IS_PARAMETER_NAME"
	EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnumValueIsParameterName    EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum = "VALUE_IS_PARAMETER_NAME"
)

type EnterpriseCrmEventbusProtoParamSpecEntryConfig struct {
	DescriptivePhrase   *string                                                                `json:"descriptivePhrase"`
	HelpText            *string                                                                `json:"helpText"`
	HideDefaultValue    *bool                                                                  `json:"hideDefaultValue"`
	InputDisplayOption  *EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum  `json:"inputDisplayOption"`
	IsHidden            *bool                                                                  `json:"isHidden"`
	Label               *string                                                                `json:"label"`
	ParameterNameOption *EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum `json:"parameterNameOption"`
	SubSectionLabel     *string                                                                `json:"subSectionLabel"`
	UIPlaceholderText   *string                                                                `json:"uiPlaceholderText"`
}
