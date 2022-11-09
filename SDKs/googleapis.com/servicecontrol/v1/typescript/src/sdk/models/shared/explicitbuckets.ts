import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExplicitBuckets
/** 
 * Describing buckets with arbitrary user-provided width.
**/
export class ExplicitBuckets extends SpeakeasyBase {
  @Metadata({ data: "json, name=bounds" })
  bounds?: number[];
}
