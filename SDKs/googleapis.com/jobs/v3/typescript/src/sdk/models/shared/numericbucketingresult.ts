import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketizedCount } from "./bucketizedcount";



// NumericBucketingResult
/** 
 * Output only. Custom numeric bucketing result.
**/
export class NumericBucketingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counts", elemType: BucketizedCount })
  counts?: BucketizedCount[];

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;
}
