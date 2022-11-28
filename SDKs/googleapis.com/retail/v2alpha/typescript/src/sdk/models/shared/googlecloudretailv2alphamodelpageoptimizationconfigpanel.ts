import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate } from "./googlecloudretailv2alphamodelpageoptimizationconfigcandidate";



// GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel
/** 
 * An individual panel with a list of ServingConfigs to consider for it.
**/
export class GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates", elemType: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate })
  candidates?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[];

  @SpeakeasyMetadata({ data: "json, name=defaultCandidate" })
  defaultCandidate?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
