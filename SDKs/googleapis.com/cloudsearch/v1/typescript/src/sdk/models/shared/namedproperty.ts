import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dateValues" })
  dateValues?: DateValues;

  @SpeakeasyMetadata({ data: "json, name=doubleValues" })
  doubleValues?: DoubleValues;

  @SpeakeasyMetadata({ data: "json, name=enumValues" })
  enumValues?: EnumValues;

  @SpeakeasyMetadata({ data: "json, name=htmlValues" })
  htmlValues?: HtmlValues;

  @SpeakeasyMetadata({ data: "json, name=integerValues" })
  integerValues?: IntegerValues;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectValues" })
  objectValues?: ObjectValues;

  @SpeakeasyMetadata({ data: "json, name=textValues" })
  textValues?: TextValues;

  @SpeakeasyMetadata({ data: "json, name=timestampValues" })
  timestampValues?: TimestampValues;
}
