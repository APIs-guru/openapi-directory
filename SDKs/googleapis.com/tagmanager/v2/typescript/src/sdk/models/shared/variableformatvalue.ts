import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";

export enum VariableFormatValueCaseConversionTypeEnum {
    None = "none"
,    Lowercase = "lowercase"
,    Uppercase = "uppercase"
}


export class VariableFormatValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseConversionType" })
  caseConversionType?: VariableFormatValueCaseConversionTypeEnum;

  @Metadata({ data: "json, name=convertFalseToValue" })
  convertFalseToValue?: Parameter;

  @Metadata({ data: "json, name=convertNullToValue" })
  convertNullToValue?: Parameter;

  @Metadata({ data: "json, name=convertTrueToValue" })
  convertTrueToValue?: Parameter;

  @Metadata({ data: "json, name=convertUndefinedToValue" })
  convertUndefinedToValue?: Parameter;
}
