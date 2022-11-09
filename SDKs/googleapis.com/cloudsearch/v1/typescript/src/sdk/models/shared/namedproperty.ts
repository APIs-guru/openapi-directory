import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateValues } from "./datevalues";
import { DoubleValues } from "./doublevalues";
import { EnumValues } from "./enumvalues";
import { HtmlValues } from "./htmlvalues";
import { IntegerValues } from "./integervalues";
import { ObjectValues } from "./objectvalues";
import { TextValues } from "./textvalues";
import { TimestampValues } from "./timestampvalues";


// NamedProperty
/** 
 * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
**/
export class NamedProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=dateValues" })
  dateValues?: DateValues;

  @Metadata({ data: "json, name=doubleValues" })
  doubleValues?: DoubleValues;

  @Metadata({ data: "json, name=enumValues" })
  enumValues?: EnumValues;

  @Metadata({ data: "json, name=htmlValues" })
  htmlValues?: HtmlValues;

  @Metadata({ data: "json, name=integerValues" })
  integerValues?: IntegerValues;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectValues" })
  objectValues?: ObjectValues;

  @Metadata({ data: "json, name=textValues" })
  textValues?: TextValues;

  @Metadata({ data: "json, name=timestampValues" })
  timestampValues?: TimestampValues;
}
