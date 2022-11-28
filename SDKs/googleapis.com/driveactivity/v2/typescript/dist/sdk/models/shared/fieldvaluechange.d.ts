import { SpeakeasyBase } from "../../../internal/utils";
import { FieldValue } from "./fieldvalue";
/**
 * Change to a Field value.
**/
export declare class FieldValueChange extends SpeakeasyBase {
    displayName?: string;
    fieldId?: string;
    newValue?: FieldValue;
    oldValue?: FieldValue;
}
