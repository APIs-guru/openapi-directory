import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketRange } from "./bucketrange";


// BucketizedCount
/** 
 * Represents count of jobs within one bucket.
**/
export class BucketizedCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=range" })
  range?: BucketRange;
}
