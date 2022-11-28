import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostScenario } from "./costscenario";



// EstimateCostScenarioWithListPriceRequest
/** 
 * Request for EstimateCostScenarioWithListPrice.
**/
export class EstimateCostScenarioWithListPriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costScenario" })
  costScenario?: CostScenario;
}
