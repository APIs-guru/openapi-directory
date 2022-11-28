import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";



// RatioPart
/** 
 * Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
**/
export class RatioPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregation" })
  aggregation?: Aggregation;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;
}
