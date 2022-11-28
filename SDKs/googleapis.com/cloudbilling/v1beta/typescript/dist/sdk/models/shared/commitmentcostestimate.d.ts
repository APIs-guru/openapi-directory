import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
import { SkuCostEstimate } from "./skucostestimate";
/**
 * Estimated cost for a commitment.
**/
export declare class CommitmentCostEstimate extends SpeakeasyBase {
    commitmentTotalCostEstimate?: CostEstimate;
    name?: string;
    skuCostEstimates?: SkuCostEstimate[];
}
