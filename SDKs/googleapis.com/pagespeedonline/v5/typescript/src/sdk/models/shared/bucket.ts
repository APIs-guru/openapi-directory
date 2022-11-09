import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bucket
/** 
 * A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
**/
export class Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;

  @Metadata({ data: "json, name=proportion" })
  proportion?: number;
}
