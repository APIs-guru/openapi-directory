import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketRange
/** 
 * Represents starting and ending value of a range in double.
**/
export class BucketRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: number;

  @Metadata({ data: "json, name=to" })
  to?: number;
}
