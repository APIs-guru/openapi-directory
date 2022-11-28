import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Explicit } from "./explicit";
import { Exponential } from "./exponential";
import { Linear } from "./linear";



// BucketOptions
/** 
 * BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
**/
export class BucketOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitBuckets" })
  explicitBuckets?: Explicit;

  @SpeakeasyMetadata({ data: "json, name=exponentialBuckets" })
  exponentialBuckets?: Exponential;

  @SpeakeasyMetadata({ data: "json, name=linearBuckets" })
  linearBuckets?: Linear;
}
