import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentCostEstimate } from "./segmentcostestimate";
import { Sku } from "./sku";
/**
 * The result of a estimating the costs of a `CostScenario`.
**/
export declare class CostEstimationResult extends SpeakeasyBase {
    currencyCode?: string;
    segmentCostEstimates?: SegmentCostEstimate[];
    skus?: Sku[];
}
