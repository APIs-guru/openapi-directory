import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum {
    Default = "DEFAULT",
    StringMultiLine = "STRING_MULTI_LINE",
    NumberSlider = "NUMBER_SLIDER",
    BooleanToggle = "BOOLEAN_TOGGLE"
}

export enum EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum {
    DefaultNotParameterName = "DEFAULT_NOT_PARAMETER_NAME",
    IsParameterName = "IS_PARAMETER_NAME",
    KeyIsParameterName = "KEY_IS_PARAMETER_NAME",
    ValueIsParameterName = "VALUE_IS_PARAMETER_NAME"
}


export class EnterpriseCrmEventbusProtoParamSpecEntryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptivePhrase" })
  descriptivePhrase?: string;

  @SpeakeasyMetadata({ data: "json, name=helpText" })
  helpText?: string;

  @SpeakeasyMetadata({ data: "json, name=hideDefaultValue" })
  hideDefaultValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inputDisplayOption" })
  inputDisplayOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=isHidden" })
  isHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterNameOption" })
  parameterNameOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=subSectionLabel" })
  subSectionLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=uiPlaceholderText" })
  uiPlaceholderText?: string;
}
