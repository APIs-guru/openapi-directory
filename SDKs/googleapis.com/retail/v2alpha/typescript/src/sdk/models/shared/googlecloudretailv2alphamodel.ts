import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfig } from "./googlecloudretailv2alphamodelpageoptimizationconfig";
import { GoogleCloudRetailV2alphaModelServingConfigList } from "./googlecloudretailv2alphamodelservingconfiglist";


export enum GoogleCloudRetailV2alphaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    DataOk = "DATA_OK",
    DataError = "DATA_ERROR"
}

export enum GoogleCloudRetailV2alphaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED",
    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED",
    AllTuningDisabled = "ALL_TUNING_DISABLED",
    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}

export enum GoogleCloudRetailV2alphaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE",
    Tuned = "TUNED"
}

export enum GoogleCloudRetailV2alphaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED",
    Paused = "PAUSED",
    Training = "TRAINING"
}


// GoogleCloudRetailV2alphaModel
/** 
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export class GoogleCloudRetailV2alphaModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataState" })
  dataState?: GoogleCloudRetailV2alphaModelDataStateEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringOption" })
  filteringOption?: GoogleCloudRetailV2alphaModelFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=lastTuneTime" })
  lastTuneTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @SpeakeasyMetadata({ data: "json, name=pageOptimizationConfig" })
  pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig;

  @SpeakeasyMetadata({ data: "json, name=periodicTuningState" })
  periodicTuningState?: GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;

  @SpeakeasyMetadata({ data: "json, name=servingConfigLists", elemType: GoogleCloudRetailV2alphaModelServingConfigList })
  servingConfigLists?: GoogleCloudRetailV2alphaModelServingConfigList[];

  @SpeakeasyMetadata({ data: "json, name=servingState" })
  servingState?: GoogleCloudRetailV2alphaModelServingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingState" })
  trainingState?: GoogleCloudRetailV2alphaModelTrainingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tuningOperation" })
  tuningOperation?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudRetailV2alphaModelInput
/** 
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export class GoogleCloudRetailV2alphaModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringOption" })
  filteringOption?: GoogleCloudRetailV2alphaModelFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @SpeakeasyMetadata({ data: "json, name=pageOptimizationConfig" })
  pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig;

  @SpeakeasyMetadata({ data: "json, name=periodicTuningState" })
  periodicTuningState?: GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingState" })
  trainingState?: GoogleCloudRetailV2alphaModelTrainingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
