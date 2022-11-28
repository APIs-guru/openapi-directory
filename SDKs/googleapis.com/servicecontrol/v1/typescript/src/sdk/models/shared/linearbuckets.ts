import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinearBuckets
/** 
 * Describing buckets with constant width.
**/
export class LinearBuckets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numFiniteBuckets" })
  numFiniteBuckets?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
