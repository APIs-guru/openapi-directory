import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostScenario } from "./costscenario";



// EstimateCostScenarioForBillingAccountRequest
/** 
 * Request for EstimateCostScenarioForBillingAccount.
**/
export class EstimateCostScenarioForBillingAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costScenario" })
  costScenario?: CostScenario;
}
