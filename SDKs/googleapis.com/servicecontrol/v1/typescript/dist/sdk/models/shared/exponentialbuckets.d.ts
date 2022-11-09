import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describing buckets with exponentially growing width.
**/
export declare class ExponentialBuckets extends SpeakeasyBase {
    growthFactor?: number;
    numFiniteBuckets?: number;
    scale?: number;
}
