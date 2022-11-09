import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CostEstimationResult } from "./costestimationresult";


// EstimateCostScenarioForBillingAccountResponse
/** 
 * Response for EstimateCostScenarioForBillingAccount
**/
export class EstimateCostScenarioForBillingAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=costEstimationResult" })
  costEstimationResult?: CostEstimationResult;
}
