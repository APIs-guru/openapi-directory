import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel } from "./googlecloudretailv2alphamodelpageoptimizationconfigpanel";
export declare enum GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum {
    RestrictionUnspecified = "RESTRICTION_UNSPECIFIED",
    NoRestriction = "NO_RESTRICTION",
    UniqueServingConfigRestriction = "UNIQUE_SERVING_CONFIG_RESTRICTION",
    UniqueModelRestriction = "UNIQUE_MODEL_RESTRICTION",
    UniqueModelTypeRestriction = "UNIQUE_MODEL_TYPE_RESTRICTION"
}
/**
 * The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configurations to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.
**/
export declare class GoogleCloudRetailV2alphaModelPageOptimizationConfig extends SpeakeasyBase {
    pageOptimizationEventType?: string;
    panels?: GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel[];
    restriction?: GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum;
}
