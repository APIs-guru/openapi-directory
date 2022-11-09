import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Exemplar } from "./exemplar";
import { ExplicitBuckets } from "./explicitbuckets";
import { ExponentialBuckets } from "./exponentialbuckets";
import { LinearBuckets } from "./linearbuckets";


// Distribution
/** 
 * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
**/
export class Distribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketCounts" })
  bucketCounts?: string[];

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=exemplars", elemType: shared.Exemplar })
  exemplars?: Exemplar[];

  @Metadata({ data: "json, name=explicitBuckets" })
  explicitBuckets?: ExplicitBuckets;

  @Metadata({ data: "json, name=exponentialBuckets" })
  exponentialBuckets?: ExponentialBuckets;

  @Metadata({ data: "json, name=linearBuckets" })
  linearBuckets?: LinearBuckets;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=mean" })
  mean?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;

  @Metadata({ data: "json, name=sumOfSquaredDeviation" })
  sumOfSquaredDeviation?: number;
}
