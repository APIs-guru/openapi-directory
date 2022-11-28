import { SpeakeasyBase } from "../../../internal/utils";
import { BucketizedCount } from "./bucketizedcount";
/**
 * Output only. Custom numeric bucketing result.
**/
export declare class NumericBucketingResult extends SpeakeasyBase {
    counts?: BucketizedCount[];
    maxValue?: number;
    minValue?: number;
}
