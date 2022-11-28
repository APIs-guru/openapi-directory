import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Percentiles
/** 
 * Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
**/
export class Percentiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=p75" })
  p75?: any;
}
