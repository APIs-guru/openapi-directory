import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input only. Use this field to specify bucketing option for the histogram search response.
**/
export declare class NumericBucketingOption extends SpeakeasyBase {
    bucketBounds?: number[];
    requiresMinMax?: boolean;
}
