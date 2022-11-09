import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExponentialBuckets
/** 
 * Describing buckets with exponentially growing width.
**/
export class ExponentialBuckets extends SpeakeasyBase {
  @Metadata({ data: "json, name=growthFactor" })
  growthFactor?: number;

  @Metadata({ data: "json, name=numFiniteBuckets" })
  numFiniteBuckets?: number;

  @Metadata({ data: "json, name=scale" })
  scale?: number;
}
