import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Date } from "./date";


// DateValues
/** 
 * List of date values.
**/
export class DateValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.Date })
  values?: Date[];
}
