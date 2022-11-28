import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate } from "./googlecloudretailv2alphamodelpageoptimizationconfigcandidate";
/**
 * An individual panel with a list of ServingConfigs to consider for it.
**/
export declare class GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel extends SpeakeasyBase {
    candidates?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[];
    defaultCandidate?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;
    displayName?: string;
}
