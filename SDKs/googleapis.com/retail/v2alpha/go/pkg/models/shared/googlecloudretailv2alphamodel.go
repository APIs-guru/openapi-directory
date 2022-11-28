package shared

type GoogleCloudRetailV2alphaModelDataStateEnum string

const (
	GoogleCloudRetailV2alphaModelDataStateEnumDataStateUnspecified GoogleCloudRetailV2alphaModelDataStateEnum = "DATA_STATE_UNSPECIFIED"
	GoogleCloudRetailV2alphaModelDataStateEnumDataOk               GoogleCloudRetailV2alphaModelDataStateEnum = "DATA_OK"
	GoogleCloudRetailV2alphaModelDataStateEnumDataError            GoogleCloudRetailV2alphaModelDataStateEnum = "DATA_ERROR"
)

type GoogleCloudRetailV2alphaModelFilteringOptionEnum string

const (
	GoogleCloudRetailV2alphaModelFilteringOptionEnumRecommendationsFilteringOptionUnspecified GoogleCloudRetailV2alphaModelFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaModelFilteringOptionEnumRecommendationsFilteringDisabled          GoogleCloudRetailV2alphaModelFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_DISABLED"
	GoogleCloudRetailV2alphaModelFilteringOptionEnumRecommendationsFilteringEnabled           GoogleCloudRetailV2alphaModelFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_ENABLED"
)

type GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum string

const (
	GoogleCloudRetailV2alphaModelPeriodicTuningStateEnumPeriodicTuningStateUnspecified GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum = "PERIODIC_TUNING_STATE_UNSPECIFIED"
	GoogleCloudRetailV2alphaModelPeriodicTuningStateEnumPeriodicTuningDisabled         GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum = "PERIODIC_TUNING_DISABLED"
	GoogleCloudRetailV2alphaModelPeriodicTuningStateEnumAllTuningDisabled              GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum = "ALL_TUNING_DISABLED"
	GoogleCloudRetailV2alphaModelPeriodicTuningStateEnumPeriodicTuningEnabled          GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum = "PERIODIC_TUNING_ENABLED"
)

type GoogleCloudRetailV2alphaModelServingStateEnum string

const (
	GoogleCloudRetailV2alphaModelServingStateEnumServingStateUnspecified GoogleCloudRetailV2alphaModelServingStateEnum = "SERVING_STATE_UNSPECIFIED"
	GoogleCloudRetailV2alphaModelServingStateEnumInactive                GoogleCloudRetailV2alphaModelServingStateEnum = "INACTIVE"
	GoogleCloudRetailV2alphaModelServingStateEnumActive                  GoogleCloudRetailV2alphaModelServingStateEnum = "ACTIVE"
	GoogleCloudRetailV2alphaModelServingStateEnumTuned                   GoogleCloudRetailV2alphaModelServingStateEnum = "TUNED"
)

type GoogleCloudRetailV2alphaModelTrainingStateEnum string

const (
	GoogleCloudRetailV2alphaModelTrainingStateEnumTrainingStateUnspecified GoogleCloudRetailV2alphaModelTrainingStateEnum = "TRAINING_STATE_UNSPECIFIED"
	GoogleCloudRetailV2alphaModelTrainingStateEnumPaused                   GoogleCloudRetailV2alphaModelTrainingStateEnum = "PAUSED"
	GoogleCloudRetailV2alphaModelTrainingStateEnumTraining                 GoogleCloudRetailV2alphaModelTrainingStateEnum = "TRAINING"
)

// GoogleCloudRetailV2alphaModelInput
// Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
type GoogleCloudRetailV2alphaModelInput struct {
	DisplayName            *string                                               `json:"displayName,omitempty"`
	FilteringOption        *GoogleCloudRetailV2alphaModelFilteringOptionEnum     `json:"filteringOption,omitempty"`
	Name                   *string                                               `json:"name,omitempty"`
	OptimizationObjective  *string                                               `json:"optimizationObjective,omitempty"`
	PageOptimizationConfig *GoogleCloudRetailV2alphaModelPageOptimizationConfig  `json:"pageOptimizationConfig,omitempty"`
	PeriodicTuningState    *GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum `json:"periodicTuningState,omitempty"`
	TrainingState          *GoogleCloudRetailV2alphaModelTrainingStateEnum       `json:"trainingState,omitempty"`
	Type                   *string                                               `json:"type,omitempty"`
}

// GoogleCloudRetailV2alphaModel
// Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
type GoogleCloudRetailV2alphaModel struct {
	CreateTime             *string                                               `json:"createTime,omitempty"`
	DataState              *GoogleCloudRetailV2alphaModelDataStateEnum           `json:"dataState,omitempty"`
	DisplayName            *string                                               `json:"displayName,omitempty"`
	FilteringOption        *GoogleCloudRetailV2alphaModelFilteringOptionEnum     `json:"filteringOption,omitempty"`
	LastTuneTime           *string                                               `json:"lastTuneTime,omitempty"`
	Name                   *string                                               `json:"name,omitempty"`
	OptimizationObjective  *string                                               `json:"optimizationObjective,omitempty"`
	PageOptimizationConfig *GoogleCloudRetailV2alphaModelPageOptimizationConfig  `json:"pageOptimizationConfig,omitempty"`
	PeriodicTuningState    *GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum `json:"periodicTuningState,omitempty"`
	ServingConfigLists     []GoogleCloudRetailV2alphaModelServingConfigList      `json:"servingConfigLists,omitempty"`
	ServingState           *GoogleCloudRetailV2alphaModelServingStateEnum        `json:"servingState,omitempty"`
	TrainingState          *GoogleCloudRetailV2alphaModelTrainingStateEnum       `json:"trainingState,omitempty"`
	TuningOperation        *string                                               `json:"tuningOperation,omitempty"`
	Type                   *string                                               `json:"type,omitempty"`
	UpdateTime             *string                                               `json:"updateTime,omitempty"`
}
