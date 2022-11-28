import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
export declare enum VariableFormatValueCaseConversionTypeEnum {
    None = "none",
    Lowercase = "lowercase",
    Uppercase = "uppercase"
}
export declare class VariableFormatValue extends SpeakeasyBase {
    caseConversionType?: VariableFormatValueCaseConversionTypeEnum;
    convertFalseToValue?: Parameter;
    convertNullToValue?: Parameter;
    convertTrueToValue?: Parameter;
    convertUndefinedToValue?: Parameter;
}
