import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Exponential
/** 
 * Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i). Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).
**/
export class Exponential extends SpeakeasyBase {
  @Metadata({ data: "json, name=growthFactor" })
  growthFactor?: number;

  @Metadata({ data: "json, name=numFiniteBuckets" })
  numFiniteBuckets?: number;

  @Metadata({ data: "json, name=scale" })
  scale?: number;
}
