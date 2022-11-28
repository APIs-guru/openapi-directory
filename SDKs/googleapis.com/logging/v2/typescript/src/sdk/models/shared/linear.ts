import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Linear
/** 
 * Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i). Lower bound (1 <= i < N): offset + (width * (i - 1)).
**/
export class Linear extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numFiniteBuckets" })
  numFiniteBuckets?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
