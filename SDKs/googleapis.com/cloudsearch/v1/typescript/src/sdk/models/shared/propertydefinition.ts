import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// PropertyDefinition
/** 
 * The definition of a property within an object.
**/
export class PropertyDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanPropertyOptions" })
  booleanPropertyOptions?: BooleanPropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=datePropertyOptions" })
  datePropertyOptions?: DatePropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=displayOptions" })
  displayOptions?: PropertyDisplayOptions;

  @SpeakeasyMetadata({ data: "json, name=doublePropertyOptions" })
  doublePropertyOptions?: DoublePropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=enumPropertyOptions" })
  enumPropertyOptions?: EnumPropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=htmlPropertyOptions" })
  htmlPropertyOptions?: HtmlPropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=integerPropertyOptions" })
  integerPropertyOptions?: IntegerPropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=isFacetable" })
  isFacetable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRepeatable" })
  isRepeatable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isReturnable" })
  isReturnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSortable" })
  isSortable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSuggestable" })
  isSuggestable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isWildcardSearchable" })
  isWildcardSearchable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectPropertyOptions" })
  objectPropertyOptions?: ObjectPropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=textPropertyOptions" })
  textPropertyOptions?: TextPropertyOptions;

  @SpeakeasyMetadata({ data: "json, name=timestampPropertyOptions" })
  timestampPropertyOptions?: TimestampPropertyOptions;
}
