import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate
/** 
 * A candidate to consider for a given panel. Currently only ServingConfig are valid candidates.
**/
export class GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=servingConfigId" })
  servingConfigId?: string;
}
