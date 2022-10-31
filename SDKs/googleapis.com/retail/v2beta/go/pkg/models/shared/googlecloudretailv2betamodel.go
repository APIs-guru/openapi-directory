package shared




type GoogleCloudRetailV2betaModelDataStateEnum string

const (
    GoogleCloudRetailV2betaModelDataStateEnumDataStateUnspecified GoogleCloudRetailV2betaModelDataStateEnum = "DATA_STATE_UNSPECIFIED"
GoogleCloudRetailV2betaModelDataStateEnumDataOk GoogleCloudRetailV2betaModelDataStateEnum = "DATA_OK"
GoogleCloudRetailV2betaModelDataStateEnumDataError GoogleCloudRetailV2betaModelDataStateEnum = "DATA_ERROR"
)



type GoogleCloudRetailV2betaModelFilteringOptionEnum string

const (
    GoogleCloudRetailV2betaModelFilteringOptionEnumRecommendationsFilteringOptionUnspecified GoogleCloudRetailV2betaModelFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
GoogleCloudRetailV2betaModelFilteringOptionEnumRecommendationsFilteringDisabled GoogleCloudRetailV2betaModelFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_DISABLED"
GoogleCloudRetailV2betaModelFilteringOptionEnumRecommendationsFilteringEnabled GoogleCloudRetailV2betaModelFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_ENABLED"
)



type GoogleCloudRetailV2betaModelPeriodicTuningStateEnum string

const (
    GoogleCloudRetailV2betaModelPeriodicTuningStateEnumPeriodicTuningStateUnspecified GoogleCloudRetailV2betaModelPeriodicTuningStateEnum = "PERIODIC_TUNING_STATE_UNSPECIFIED"
GoogleCloudRetailV2betaModelPeriodicTuningStateEnumPeriodicTuningDisabled GoogleCloudRetailV2betaModelPeriodicTuningStateEnum = "PERIODIC_TUNING_DISABLED"
GoogleCloudRetailV2betaModelPeriodicTuningStateEnumAllTuningDisabled GoogleCloudRetailV2betaModelPeriodicTuningStateEnum = "ALL_TUNING_DISABLED"
GoogleCloudRetailV2betaModelPeriodicTuningStateEnumPeriodicTuningEnabled GoogleCloudRetailV2betaModelPeriodicTuningStateEnum = "PERIODIC_TUNING_ENABLED"
)



type GoogleCloudRetailV2betaModelServingStateEnum string

const (
    GoogleCloudRetailV2betaModelServingStateEnumServingStateUnspecified GoogleCloudRetailV2betaModelServingStateEnum = "SERVING_STATE_UNSPECIFIED"
GoogleCloudRetailV2betaModelServingStateEnumInactive GoogleCloudRetailV2betaModelServingStateEnum = "INACTIVE"
GoogleCloudRetailV2betaModelServingStateEnumActive GoogleCloudRetailV2betaModelServingStateEnum = "ACTIVE"
GoogleCloudRetailV2betaModelServingStateEnumTuned GoogleCloudRetailV2betaModelServingStateEnum = "TUNED"
)



type GoogleCloudRetailV2betaModelTrainingStateEnum string

const (
    GoogleCloudRetailV2betaModelTrainingStateEnumTrainingStateUnspecified GoogleCloudRetailV2betaModelTrainingStateEnum = "TRAINING_STATE_UNSPECIFIED"
GoogleCloudRetailV2betaModelTrainingStateEnumPaused GoogleCloudRetailV2betaModelTrainingStateEnum = "PAUSED"
GoogleCloudRetailV2betaModelTrainingStateEnumTraining GoogleCloudRetailV2betaModelTrainingStateEnum = "TRAINING"
)


type GoogleCloudRetailV2betaModel struct {
    CreateTime *string `json:"createTime,omitempty"`
    DataState *GoogleCloudRetailV2betaModelDataStateEnum `json:"dataState,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    FilteringOption *GoogleCloudRetailV2betaModelFilteringOptionEnum `json:"filteringOption,omitempty"`
    LastTuneTime *string `json:"lastTuneTime,omitempty"`
    Name *string `json:"name,omitempty"`
    OptimizationObjective *string `json:"optimizationObjective,omitempty"`
    PeriodicTuningState *GoogleCloudRetailV2betaModelPeriodicTuningStateEnum `json:"periodicTuningState,omitempty"`
    ServingConfigLists []GoogleCloudRetailV2betaModelServingConfigList `json:"servingConfigLists,omitempty"`
    ServingState *GoogleCloudRetailV2betaModelServingStateEnum `json:"servingState,omitempty"`
    TrainingState *GoogleCloudRetailV2betaModelTrainingStateEnum `json:"trainingState,omitempty"`
    TuningOperation *string `json:"tuningOperation,omitempty"`
    Type *string `json:"type,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

