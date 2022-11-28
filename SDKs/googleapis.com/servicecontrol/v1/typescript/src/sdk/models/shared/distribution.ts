import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Exemplar } from "./exemplar";
import { ExplicitBuckets } from "./explicitbuckets";
import { ExponentialBuckets } from "./exponentialbuckets";
import { LinearBuckets } from "./linearbuckets";



// Distribution
/** 
 * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketCounts" })
  bucketCounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=exemplars", elemType: Exemplar })
  exemplars?: Exemplar[];

  @SpeakeasyMetadata({ data: "json, name=explicitBuckets" })
  explicitBuckets?: ExplicitBuckets;

  @SpeakeasyMetadata({ data: "json, name=exponentialBuckets" })
  exponentialBuckets?: ExponentialBuckets;

  @SpeakeasyMetadata({ data: "json, name=linearBuckets" })
  linearBuckets?: LinearBuckets;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=sumOfSquaredDeviation" })
  sumOfSquaredDeviation?: number;
}
