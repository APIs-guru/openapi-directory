import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


// Value
/** 
 * Definition of a single value with generic type.
**/
export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=dateValue" })
  dateValue?: Date;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=timestampValue" })
  timestampValue?: string;
}
