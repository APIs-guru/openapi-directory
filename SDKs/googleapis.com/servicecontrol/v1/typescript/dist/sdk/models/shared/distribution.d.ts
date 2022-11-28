import { SpeakeasyBase } from "../../../internal/utils";
import { Exemplar } from "./exemplar";
import { ExplicitBuckets } from "./explicitbuckets";
import { ExponentialBuckets } from "./exponentialbuckets";
import { LinearBuckets } from "./linearbuckets";
/**
 * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
**/
export declare class Distribution extends SpeakeasyBase {
    bucketCounts?: string[];
    count?: string;
    exemplars?: Exemplar[];
    explicitBuckets?: ExplicitBuckets;
    exponentialBuckets?: ExponentialBuckets;
    linearBuckets?: LinearBuckets;
    maximum?: number;
    mean?: number;
    minimum?: number;
    sumOfSquaredDeviation?: number;
}
