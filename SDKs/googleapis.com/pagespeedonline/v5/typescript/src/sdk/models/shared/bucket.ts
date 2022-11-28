import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bucket
/** 
 * A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
**/
export class Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;

  @SpeakeasyMetadata({ data: "json, name=proportion" })
  proportion?: number;
}
