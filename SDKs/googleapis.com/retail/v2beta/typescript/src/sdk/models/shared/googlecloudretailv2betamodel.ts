import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaModelServingConfigList } from "./googlecloudretailv2betamodelservingconfiglist";


export enum GoogleCloudRetailV2betaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    DataOk = "DATA_OK",
    DataError = "DATA_ERROR"
}

export enum GoogleCloudRetailV2betaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2betaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED",
    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED",
    AllTuningDisabled = "ALL_TUNING_DISABLED",
    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}

export enum GoogleCloudRetailV2betaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE",
    Tuned = "TUNED"
}

export enum GoogleCloudRetailV2betaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED",
    Paused = "PAUSED",
    Training = "TRAINING"
}


// GoogleCloudRetailV2betaModelInput
/** 
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export class GoogleCloudRetailV2betaModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringOption" })
  filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @SpeakeasyMetadata({ data: "json, name=periodicTuningState" })
  periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingState" })
  trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GoogleCloudRetailV2betaModel
/** 
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export class GoogleCloudRetailV2betaModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataState" })
  dataState?: GoogleCloudRetailV2betaModelDataStateEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringOption" })
  filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=lastTuneTime" })
  lastTuneTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @SpeakeasyMetadata({ data: "json, name=periodicTuningState" })
  periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;

  @SpeakeasyMetadata({ data: "json, name=servingConfigLists", elemType: GoogleCloudRetailV2betaModelServingConfigList })
  servingConfigLists?: GoogleCloudRetailV2betaModelServingConfigList[];

  @SpeakeasyMetadata({ data: "json, name=servingState" })
  servingState?: GoogleCloudRetailV2betaModelServingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trainingState" })
  trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tuningOperation" })
  tuningOperation?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
