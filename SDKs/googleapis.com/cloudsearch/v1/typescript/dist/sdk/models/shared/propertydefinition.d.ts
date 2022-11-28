import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanPropertyOptions } from "./booleanpropertyoptions";
import { DatePropertyOptions } from "./datepropertyoptions";
import { PropertyDisplayOptions } from "./propertydisplayoptions";
import { DoublePropertyOptions } from "./doublepropertyoptions";
import { EnumPropertyOptions } from "./enumpropertyoptions";
import { HtmlPropertyOptions } from "./htmlpropertyoptions";
import { IntegerPropertyOptions } from "./integerpropertyoptions";
import { ObjectPropertyOptions } from "./objectpropertyoptions";
import { TextPropertyOptions } from "./textpropertyoptions";
import { TimestampPropertyOptions } from "./timestamppropertyoptions";
/**
 * The definition of a property within an object.
**/
export declare class PropertyDefinition extends SpeakeasyBase {
    booleanPropertyOptions?: BooleanPropertyOptions;
    datePropertyOptions?: DatePropertyOptions;
    displayOptions?: PropertyDisplayOptions;
    doublePropertyOptions?: DoublePropertyOptions;
    enumPropertyOptions?: EnumPropertyOptions;
    htmlPropertyOptions?: HtmlPropertyOptions;
    integerPropertyOptions?: IntegerPropertyOptions;
    isFacetable?: boolean;
    isRepeatable?: boolean;
    isReturnable?: boolean;
    isSortable?: boolean;
    isSuggestable?: boolean;
    isWildcardSearchable?: boolean;
    name?: string;
    objectPropertyOptions?: ObjectPropertyOptions;
    textPropertyOptions?: TextPropertyOptions;
    timestampPropertyOptions?: TimestampPropertyOptions;
}
