import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketRange
/** 
 * Represents starting and ending value of a range in double.
**/
export class BucketRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: number;
}
