import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CostEstimationResult } from "./costestimationresult";


// EstimateCostScenarioWithListPriceResponse
/** 
 * Response for EstimateCostScenarioWithListPrice
**/
export class EstimateCostScenarioWithListPriceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=costEstimationResult" })
  costEstimationResult?: CostEstimationResult;
}
