import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bin } from "./bin";
import { Percentiles } from "./percentiles";



// Metric
/** 
 * A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogram", elemType: Bin })
  histogram?: Bin[];

  @SpeakeasyMetadata({ data: "json, name=percentiles" })
  percentiles?: Percentiles;
}
