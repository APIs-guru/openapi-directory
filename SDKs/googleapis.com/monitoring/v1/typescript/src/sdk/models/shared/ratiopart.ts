import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Aggregation } from "./aggregation";


// RatioPart
/** 
 * Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
**/
export class RatioPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregation" })
  aggregation?: Aggregation;

  @Metadata({ data: "json, name=filter" })
  filter?: string;
}
