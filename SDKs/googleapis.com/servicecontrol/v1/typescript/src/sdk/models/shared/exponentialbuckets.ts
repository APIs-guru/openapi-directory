import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExponentialBuckets
/** 
 * Describing buckets with exponentially growing width.
**/
export class ExponentialBuckets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=growthFactor" })
  growthFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=numFiniteBuckets" })
  numFiniteBuckets?: number;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;
}
