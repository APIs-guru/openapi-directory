import { SpeakeasyBase } from "../../../internal/utils";
import { CreditEstimate } from "./creditestimate";
import { Money } from "./money";
/**
 * An estimated cost.
**/
export declare class CostEstimate extends SpeakeasyBase {
    creditEstimates?: CreditEstimate[];
    netCostEstimate?: Money;
    preCreditCostEstimate?: Money;
}
