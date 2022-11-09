import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinearBuckets
/** 
 * Describing buckets with constant width.
**/
export class LinearBuckets extends SpeakeasyBase {
  @Metadata({ data: "json, name=numFiniteBuckets" })
  numFiniteBuckets?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
