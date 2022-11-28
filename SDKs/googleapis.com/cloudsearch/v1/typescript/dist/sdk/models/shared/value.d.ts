import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Definition of a single value with generic type.
**/
export declare class Value extends SpeakeasyBase {
    booleanValue?: boolean;
    dateValue?: Date;
    doubleValue?: number;
    integerValue?: string;
    stringValue?: string;
    timestampValue?: string;
}
