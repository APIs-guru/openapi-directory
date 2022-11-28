import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostEstimationResult } from "./costestimationresult";



// EstimateCostScenarioWithListPriceResponse
/** 
 * Response for EstimateCostScenarioWithListPrice
**/
export class EstimateCostScenarioWithListPriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costEstimationResult" })
  costEstimationResult?: CostEstimationResult;
}
