import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampValues
/** 
 * List of timestamp values.
**/
export class TimestampValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
