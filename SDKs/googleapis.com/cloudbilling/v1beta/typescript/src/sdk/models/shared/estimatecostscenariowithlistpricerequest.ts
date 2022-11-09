import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CostScenario } from "./costscenario";


// EstimateCostScenarioWithListPriceRequest
/** 
 * Request for EstimateCostScenarioWithListPrice.
**/
export class EstimateCostScenarioWithListPriceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=costScenario" })
  costScenario?: CostScenario;
}
