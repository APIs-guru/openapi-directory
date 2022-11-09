import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GaugeView
/** 
 * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
**/
export class GaugeView extends SpeakeasyBase {
  @Metadata({ data: "json, name=lowerBound" })
  lowerBound?: number;

  @Metadata({ data: "json, name=upperBound" })
  upperBound?: number;
}
