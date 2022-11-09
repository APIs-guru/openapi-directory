import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=booleanPropertyOptions" })
  booleanPropertyOptions?: BooleanPropertyOptions;

  @Metadata({ data: "json, name=datePropertyOptions" })
  datePropertyOptions?: DatePropertyOptions;

  @Metadata({ data: "json, name=displayOptions" })
  displayOptions?: PropertyDisplayOptions;

  @Metadata({ data: "json, name=doublePropertyOptions" })
  doublePropertyOptions?: DoublePropertyOptions;

  @Metadata({ data: "json, name=enumPropertyOptions" })
  enumPropertyOptions?: EnumPropertyOptions;

  @Metadata({ data: "json, name=htmlPropertyOptions" })
  htmlPropertyOptions?: HtmlPropertyOptions;

  @Metadata({ data: "json, name=integerPropertyOptions" })
  integerPropertyOptions?: IntegerPropertyOptions;

  @Metadata({ data: "json, name=isFacetable" })
  isFacetable?: boolean;

  @Metadata({ data: "json, name=isRepeatable" })
  isRepeatable?: boolean;

  @Metadata({ data: "json, name=isReturnable" })
  isReturnable?: boolean;

  @Metadata({ data: "json, name=isSortable" })
  isSortable?: boolean;

  @Metadata({ data: "json, name=isSuggestable" })
  isSuggestable?: boolean;

  @Metadata({ data: "json, name=isWildcardSearchable" })
  isWildcardSearchable?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectPropertyOptions" })
  objectPropertyOptions?: ObjectPropertyOptions;

  @Metadata({ data: "json, name=textPropertyOptions" })
  textPropertyOptions?: TextPropertyOptions;

  @Metadata({ data: "json, name=timestampPropertyOptions" })
  timestampPropertyOptions?: TimestampPropertyOptions;
}
