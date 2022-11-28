import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum {
    Default = "DEFAULT",
    StringMultiLine = "STRING_MULTI_LINE",
    NumberSlider = "NUMBER_SLIDER",
    BooleanToggle = "BOOLEAN_TOGGLE"
}
export declare enum EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum {
    DefaultNotParameterName = "DEFAULT_NOT_PARAMETER_NAME",
    IsParameterName = "IS_PARAMETER_NAME",
    KeyIsParameterName = "KEY_IS_PARAMETER_NAME",
    ValueIsParameterName = "VALUE_IS_PARAMETER_NAME"
}
export declare class EnterpriseCrmEventbusProtoParamSpecEntryConfig extends SpeakeasyBase {
    descriptivePhrase?: string;
    helpText?: string;
    hideDefaultValue?: boolean;
    inputDisplayOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;
    isHidden?: boolean;
    label?: string;
    parameterNameOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;
    subSectionLabel?: string;
    uiPlaceholderText?: string;
}
