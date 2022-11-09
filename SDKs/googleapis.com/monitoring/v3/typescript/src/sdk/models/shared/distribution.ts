import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketOptions } from "./bucketoptions";
import { Exemplar } from "./exemplar";
import { Range } from "./range";


// Distribution
/** 
 * Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
**/
export class Distribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketCounts" })
  bucketCounts?: string[];

  @Metadata({ data: "json, name=bucketOptions" })
  bucketOptions?: BucketOptions;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=exemplars", elemType: shared.Exemplar })
  exemplars?: Exemplar[];

  @Metadata({ data: "json, name=mean" })
  mean?: number;

  @Metadata({ data: "json, name=range" })
  range?: Range;

  @Metadata({ data: "json, name=sumOfSquaredDeviation" })
  sumOfSquaredDeviation?: number;
}
