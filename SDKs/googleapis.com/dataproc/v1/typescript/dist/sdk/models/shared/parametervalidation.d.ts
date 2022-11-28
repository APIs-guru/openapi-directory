import { SpeakeasyBase } from "../../../internal/utils";
import { RegexValidation } from "./regexvalidation";
import { ValueValidation } from "./valuevalidation";
/**
 * Configuration for parameter validation.
**/
export declare class ParameterValidation extends SpeakeasyBase {
    regex?: RegexValidation;
    values?: ValueValidation;
}
