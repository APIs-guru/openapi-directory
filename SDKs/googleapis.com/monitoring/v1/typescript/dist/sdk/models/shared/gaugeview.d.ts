import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
**/
export declare class GaugeView extends SpeakeasyBase {
    lowerBound?: number;
    upperBound?: number;
}
