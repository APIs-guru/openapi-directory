import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampValues
/** 
 * List of timestamp values.
**/
export class TimestampValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
