import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
**/
export declare class RepeatedEnumAttributeValue extends SpeakeasyBase {
    setValues?: string[];
    unsetValues?: string[];
}
