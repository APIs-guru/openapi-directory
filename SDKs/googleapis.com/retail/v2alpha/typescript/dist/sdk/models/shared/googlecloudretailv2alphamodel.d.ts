import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfig } from "./googlecloudretailv2alphamodelpageoptimizationconfig";
import { GoogleCloudRetailV2alphaModelServingConfigList } from "./googlecloudretailv2alphamodelservingconfiglist";
export declare enum GoogleCloudRetailV2alphaModelDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    DataOk = "DATA_OK",
    DataError = "DATA_ERROR"
}
export declare enum GoogleCloudRetailV2alphaModelFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}
export declare enum GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum {
    PeriodicTuningStateUnspecified = "PERIODIC_TUNING_STATE_UNSPECIFIED",
    PeriodicTuningDisabled = "PERIODIC_TUNING_DISABLED",
    AllTuningDisabled = "ALL_TUNING_DISABLED",
    PeriodicTuningEnabled = "PERIODIC_TUNING_ENABLED"
}
export declare enum GoogleCloudRetailV2alphaModelServingStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE",
    Tuned = "TUNED"
}
export declare enum GoogleCloudRetailV2alphaModelTrainingStateEnum {
    TrainingStateUnspecified = "TRAINING_STATE_UNSPECIFIED",
    Paused = "PAUSED",
    Training = "TRAINING"
}
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export declare class GoogleCloudRetailV2alphaModel extends SpeakeasyBase {
    createTime?: string;
    dataState?: GoogleCloudRetailV2alphaModelDataStateEnum;
    displayName?: string;
    filteringOption?: GoogleCloudRetailV2alphaModelFilteringOptionEnum;
    lastTuneTime?: string;
    name?: string;
    optimizationObjective?: string;
    pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig;
    periodicTuningState?: GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;
    servingConfigLists?: GoogleCloudRetailV2alphaModelServingConfigList[];
    servingState?: GoogleCloudRetailV2alphaModelServingStateEnum;
    trainingState?: GoogleCloudRetailV2alphaModelTrainingStateEnum;
    tuningOperation?: string;
    type?: string;
    updateTime?: string;
}
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
export declare class GoogleCloudRetailV2alphaModelInput extends SpeakeasyBase {
    displayName?: string;
    filteringOption?: GoogleCloudRetailV2alphaModelFilteringOptionEnum;
    name?: string;
    optimizationObjective?: string;
    pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig;
    periodicTuningState?: GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;
    trainingState?: GoogleCloudRetailV2alphaModelTrainingStateEnum;
    type?: string;
}
