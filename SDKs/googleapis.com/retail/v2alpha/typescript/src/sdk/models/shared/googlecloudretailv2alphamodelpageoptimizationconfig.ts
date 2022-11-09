import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel } from "./googlecloudretailv2alphamodelpageoptimizationconfigpanel";

export enum GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum {
    RestrictionUnspecified = "RESTRICTION_UNSPECIFIED"
,    NoRestriction = "NO_RESTRICTION"
,    UniqueServingConfigRestriction = "UNIQUE_SERVING_CONFIG_RESTRICTION"
,    UniqueModelRestriction = "UNIQUE_MODEL_RESTRICTION"
,    UniqueModelTypeRestriction = "UNIQUE_MODEL_TYPE_RESTRICTION"
}


// GoogleCloudRetailV2alphaModelPageOptimizationConfig
/** 
 * The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configurations to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.
**/
export class GoogleCloudRetailV2alphaModelPageOptimizationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageOptimizationEventType" })
  pageOptimizationEventType?: string;

  @Metadata({ data: "json, name=panels", elemType: shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel })
  panels?: GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel[];

  @Metadata({ data: "json, name=restriction" })
  restriction?: GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum;
}
