import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreditEstimate } from "./creditestimate";
import { Money } from "./money";
import { Money } from "./money";


// CostEstimate
/** 
 * An estimated cost.
**/
export class CostEstimate extends SpeakeasyBase {
  @Metadata({ data: "json, name=creditEstimates", elemType: shared.CreditEstimate })
  creditEstimates?: CreditEstimate[];

  @Metadata({ data: "json, name=netCostEstimate" })
  netCostEstimate?: Money;

  @Metadata({ data: "json, name=preCreditCostEstimate" })
  preCreditCostEstimate?: Money;
}
