import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// DateValues
/** 
 * List of date values.
**/
export class DateValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: Date })
  values?: Date[];
}
