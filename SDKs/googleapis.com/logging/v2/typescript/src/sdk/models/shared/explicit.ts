import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Explicit
/** 
 * Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.
**/
export class Explicit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bounds" })
  bounds?: number[];
}
