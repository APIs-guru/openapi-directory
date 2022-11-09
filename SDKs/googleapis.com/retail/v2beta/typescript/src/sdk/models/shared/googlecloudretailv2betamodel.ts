import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaModelServingConfigList } from "./googlecloudretailv2betamodelservingconfiglist";

export enum GoogleCloudRetailV2betaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED"
,    DataOk = "DATA_OK"
,    DataError = "DATA_ERROR"
}

export enum GoogleCloudRetailV2betaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
,    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED"
,    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2betaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED"
,    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED"
,    AllTuningDisabled = "ALL_TUNING_DISABLED"
,    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}

export enum GoogleCloudRetailV2betaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED"
,    Inactive = "INACTIVE"
,    Active = "ACTIVE"
,    Tuned = "TUNED"
}

export enum GoogleCloudRetailV2betaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED"
,    Paused = "PAUSED"
,    Training = "TRAINING"
}


// GoogleCloudRetailV2betaModel
/** 
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export class GoogleCloudRetailV2betaModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataState" })
  dataState?: GoogleCloudRetailV2betaModelDataStateEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=filteringOption" })
  filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;

  @Metadata({ data: "json, name=lastTuneTime" })
  lastTuneTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @Metadata({ data: "json, name=periodicTuningState" })
  periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;

  @Metadata({ data: "json, name=servingConfigLists", elemType: shared.GoogleCloudRetailV2betaModelServingConfigList })
  servingConfigLists?: GoogleCloudRetailV2betaModelServingConfigList[];

  @Metadata({ data: "json, name=servingState" })
  servingState?: GoogleCloudRetailV2betaModelServingStateEnum;

  @Metadata({ data: "json, name=trainingState" })
  trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;

  @Metadata({ data: "json, name=tuningOperation" })
  tuningOperation?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
