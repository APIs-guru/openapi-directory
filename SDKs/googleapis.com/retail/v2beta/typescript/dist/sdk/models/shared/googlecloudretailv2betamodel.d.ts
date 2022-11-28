import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaModelServingConfigList } from "./googlecloudretailv2betamodelservingconfiglist";
export declare enum GoogleCloudRetailV2betaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    DataOk = "DATA_OK",
    DataError = "DATA_ERROR"
}
export declare enum GoogleCloudRetailV2betaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}
export declare enum GoogleCloudRetailV2betaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED",
    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED",
    AllTuningDisabled = "ALL_TUNING_DISABLED",
    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}
export declare enum GoogleCloudRetailV2betaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE",
    Tuned = "TUNED"
}
export declare enum GoogleCloudRetailV2betaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED",
    Paused = "PAUSED",
    Training = "TRAINING"
}
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export declare class GoogleCloudRetailV2betaModelInput extends SpeakeasyBase {
    displayName?: string;
    filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;
    name?: string;
    optimizationObjective?: string;
    periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
    trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;
    type?: string;
}
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export declare class GoogleCloudRetailV2betaModel extends SpeakeasyBase {
    createTime?: string;
    dataState?: GoogleCloudRetailV2betaModelDataStateEnum;
    displayName?: string;
    filteringOption?: GoogleCloudRetailV2betaModelFilteringOptionEnum;
    lastTuneTime?: string;
    name?: string;
    optimizationObjective?: string;
    periodicTuningState?: GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
    servingConfigLists?: GoogleCloudRetailV2betaModelServingConfigList[];
    servingState?: GoogleCloudRetailV2betaModelServingStateEnum;
    trainingState?: GoogleCloudRetailV2betaModelTrainingStateEnum;
    tuningOperation?: string;
    type?: string;
    updateTime?: string;
}
