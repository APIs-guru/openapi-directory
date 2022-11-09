import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bin
/** 
 * A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
**/
export class Bin extends SpeakeasyBase {
  @Metadata({ data: "json, name=density" })
  density?: number;

  @Metadata({ data: "json, name=end" })
  end?: any;

  @Metadata({ data: "json, name=start" })
  start?: any;
}
