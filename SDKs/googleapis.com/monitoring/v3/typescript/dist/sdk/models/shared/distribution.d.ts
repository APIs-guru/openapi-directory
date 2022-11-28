import { SpeakeasyBase } from "../../../internal/utils";
import { BucketOptions } from "./bucketoptions";
import { Exemplar } from "./exemplar";
import { Range } from "./range";
/**
 * Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
**/
export declare class Distribution extends SpeakeasyBase {
    bucketCounts?: string[];
    bucketOptions?: BucketOptions;
    count?: string;
    exemplars?: Exemplar[];
    mean?: number;
    range?: Range;
    sumOfSquaredDeviation?: number;
}
