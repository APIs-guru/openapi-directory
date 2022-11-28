import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentCostEstimate } from "./segmentcostestimate";
import { Sku } from "./sku";



// CostEstimationResult
/** 
 * The result of a estimating the costs of a `CostScenario`.
**/
export class CostEstimationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentCostEstimates", elemType: SegmentCostEstimate })
  segmentCostEstimates?: SegmentCostEstimate[];

  @SpeakeasyMetadata({ data: "json, name=skus", elemType: Sku })
  skus?: Sku[];
}
