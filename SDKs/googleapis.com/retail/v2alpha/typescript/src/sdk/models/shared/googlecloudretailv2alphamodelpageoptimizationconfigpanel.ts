import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate } from "./googlecloudretailv2alphamodelpageoptimizationconfigcandidate";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate } from "./googlecloudretailv2alphamodelpageoptimizationconfigcandidate";


// GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel
/** 
 * An individual panel with a list of ServingConfigs to consider for it.
**/
export class GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates", elemType: shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate })
  candidates?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[];

  @Metadata({ data: "json, name=defaultCandidate" })
  defaultCandidate?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
