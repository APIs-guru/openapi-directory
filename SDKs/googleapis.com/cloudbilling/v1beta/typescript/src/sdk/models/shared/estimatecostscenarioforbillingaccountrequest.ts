import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CostScenario } from "./costscenario";


// EstimateCostScenarioForBillingAccountRequest
/** 
 * Request for EstimateCostScenarioForBillingAccount.
**/
export class EstimateCostScenarioForBillingAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=costScenario" })
  costScenario?: CostScenario;
}
