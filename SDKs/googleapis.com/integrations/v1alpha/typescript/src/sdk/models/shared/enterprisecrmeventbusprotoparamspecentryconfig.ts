import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum {
    Default = "DEFAULT"
,    StringMultiLine = "STRING_MULTI_LINE"
,    NumberSlider = "NUMBER_SLIDER"
,    BooleanToggle = "BOOLEAN_TOGGLE"
}

export enum EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum {
    DefaultNotParameterName = "DEFAULT_NOT_PARAMETER_NAME"
,    IsParameterName = "IS_PARAMETER_NAME"
,    KeyIsParameterName = "KEY_IS_PARAMETER_NAME"
,    ValueIsParameterName = "VALUE_IS_PARAMETER_NAME"
}


export class EnterpriseCrmEventbusProtoParamSpecEntryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptivePhrase" })
  descriptivePhrase?: string;

  @Metadata({ data: "json, name=helpText" })
  helpText?: string;

  @Metadata({ data: "json, name=hideDefaultValue" })
  hideDefaultValue?: boolean;

  @Metadata({ data: "json, name=inputDisplayOption" })
  inputDisplayOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;

  @Metadata({ data: "json, name=isHidden" })
  isHidden?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=parameterNameOption" })
  parameterNameOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;

  @Metadata({ data: "json, name=subSectionLabel" })
  subSectionLabel?: string;

  @Metadata({ data: "json, name=uiPlaceholderText" })
  uiPlaceholderText?: string;
}
