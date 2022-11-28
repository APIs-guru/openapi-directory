import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";


export enum VariableFormatValueCaseConversionTypeEnum {
    None = "none",
    Lowercase = "lowercase",
    Uppercase = "uppercase"
}


export class VariableFormatValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseConversionType" })
  caseConversionType?: VariableFormatValueCaseConversionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=convertFalseToValue" })
  convertFalseToValue?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=convertNullToValue" })
  convertNullToValue?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=convertTrueToValue" })
  convertTrueToValue?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=convertUndefinedToValue" })
  convertUndefinedToValue?: Parameter;
}
