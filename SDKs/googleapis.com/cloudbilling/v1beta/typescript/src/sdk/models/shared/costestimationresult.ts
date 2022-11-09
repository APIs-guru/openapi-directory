import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentCostEstimate } from "./segmentcostestimate";
import { Sku } from "./sku";


// CostEstimationResult
/** 
 * The result of a estimating the costs of a `CostScenario`.
**/
export class CostEstimationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=segmentCostEstimates", elemType: shared.SegmentCostEstimate })
  segmentCostEstimates?: SegmentCostEstimate[];

  @Metadata({ data: "json, name=skus", elemType: shared.Sku })
  skus?: Sku[];
}
