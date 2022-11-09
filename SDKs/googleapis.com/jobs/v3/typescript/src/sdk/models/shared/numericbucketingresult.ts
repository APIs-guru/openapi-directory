import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketizedCount } from "./bucketizedcount";


// NumericBucketingResult
/** 
 * Output only. Custom numeric bucketing result.
**/
export class NumericBucketingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=counts", elemType: shared.BucketizedCount })
  counts?: BucketizedCount[];

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;
}
