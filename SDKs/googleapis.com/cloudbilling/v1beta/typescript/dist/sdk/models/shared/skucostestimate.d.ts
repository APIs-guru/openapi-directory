import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
/**
 * Estimated cost for usage on a SKU.
**/
export declare class SkuCostEstimate extends SpeakeasyBase {
    costEstimate?: CostEstimate;
    sku?: string;
    usageAmount?: number;
    usageUnit?: string;
}
