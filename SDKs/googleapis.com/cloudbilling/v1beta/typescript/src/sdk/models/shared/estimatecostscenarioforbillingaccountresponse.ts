import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostEstimationResult } from "./costestimationresult";



// EstimateCostScenarioForBillingAccountResponse
/** 
 * Response for EstimateCostScenarioForBillingAccount
**/
export class EstimateCostScenarioForBillingAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costEstimationResult" })
  costEstimationResult?: CostEstimationResult;
}
