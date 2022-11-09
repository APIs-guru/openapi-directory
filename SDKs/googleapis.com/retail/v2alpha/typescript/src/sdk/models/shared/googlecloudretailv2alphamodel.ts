import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfig } from "./googlecloudretailv2alphamodelpageoptimizationconfig";
import { GoogleCloudRetailV2alphaModelServingConfigList } from "./googlecloudretailv2alphamodelservingconfiglist";

export enum GoogleCloudRetailV2alphaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED"
,    DataOk = "DATA_OK"
,    DataError = "DATA_ERROR"
}

export enum GoogleCloudRetailV2alphaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
,    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED"
,    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED"
,    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED"
,    AllTuningDisabled = "ALL_TUNING_DISABLED"
,    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}

export enum GoogleCloudRetailV2alphaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED"
,    Inactive = "INACTIVE"
,    Active = "ACTIVE"
,    Tuned = "TUNED"
}

export enum GoogleCloudRetailV2alphaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED"
,    Paused = "PAUSED"
,    Training = "TRAINING"
}


// GoogleCloudRetailV2alphaModel
/** 
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export class GoogleCloudRetailV2alphaModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataState" })
  dataState?: GoogleCloudRetailV2alphaModelDataStateEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=filteringOption" })
  filteringOption?: GoogleCloudRetailV2alphaModelFilteringOptionEnum;

  @Metadata({ data: "json, name=lastTuneTime" })
  lastTuneTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @Metadata({ data: "json, name=pageOptimizationConfig" })
  pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig;

  @Metadata({ data: "json, name=periodicTuningState" })
  periodicTuningState?: GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;

  @Metadata({ data: "json, name=servingConfigLists", elemType: shared.GoogleCloudRetailV2alphaModelServingConfigList })
  servingConfigLists?: GoogleCloudRetailV2alphaModelServingConfigList[];

  @Metadata({ data: "json, name=servingState" })
  servingState?: GoogleCloudRetailV2alphaModelServingStateEnum;

  @Metadata({ data: "json, name=trainingState" })
  trainingState?: GoogleCloudRetailV2alphaModelTrainingStateEnum;

  @Metadata({ data: "json, name=tuningOperation" })
  tuningOperation?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
