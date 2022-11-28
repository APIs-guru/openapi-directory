import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditEstimate } from "./creditestimate";
import { Money } from "./money";



// CostEstimate
/** 
 * An estimated cost.
**/
export class CostEstimate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditEstimates", elemType: CreditEstimate })
  creditEstimates?: CreditEstimate[];

  @SpeakeasyMetadata({ data: "json, name=netCostEstimate" })
  netCostEstimate?: Money;

  @SpeakeasyMetadata({ data: "json, name=preCreditCostEstimate" })
  preCreditCostEstimate?: Money;
}
