import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExplicitBuckets
/** 
 * Describing buckets with arbitrary user-provided width.
**/
export class ExplicitBuckets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bounds" })
  bounds?: number[];
}
