import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketRange } from "./bucketrange";



// BucketizedCount
/** 
 * Represents count of jobs within one bucket.
**/
export class BucketizedCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: BucketRange;
}
