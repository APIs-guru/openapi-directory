import { SpeakeasyBase } from "../../../internal/utils";
import { DateValues } from "./datevalues";
import { DoubleValues } from "./doublevalues";
import { EnumValues } from "./enumvalues";
import { HtmlValues } from "./htmlvalues";
import { IntegerValues } from "./integervalues";
import { ObjectValues } from "./objectvalues";
import { TextValues } from "./textvalues";
import { TimestampValues } from "./timestampvalues";
/**
 * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
**/
export declare class NamedProperty extends SpeakeasyBase {
    booleanValue?: boolean;
    dateValues?: DateValues;
    doubleValues?: DoubleValues;
    enumValues?: EnumValues;
    htmlValues?: HtmlValues;
    integerValues?: IntegerValues;
    name?: string;
    objectValues?: ObjectValues;
    textValues?: TextValues;
    timestampValues?: TimestampValues;
}
