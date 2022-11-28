import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GaugeView
/** 
 * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
**/
export class GaugeView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lowerBound" })
  lowerBound?: number;

  @SpeakeasyMetadata({ data: "json, name=upperBound" })
  upperBound?: number;
}
