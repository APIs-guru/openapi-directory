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

type GoogleCloudRetailV2alphaModel struct {
	CreateTime             *string                                               `json:"createTime"`
	DataState              *GoogleCloudRetailV2alphaModelDataStateEnum           `json:"dataState"`
	DisplayName            *string                                               `json:"displayName"`
	FilteringOption        *GoogleCloudRetailV2alphaModelFilteringOptionEnum     `json:"filteringOption"`
	LastTuneTime           *string                                               `json:"lastTuneTime"`
	Name                   *string                                               `json:"name"`
	OptimizationObjective  *string                                               `json:"optimizationObjective"`
	PageOptimizationConfig *GoogleCloudRetailV2alphaModelPageOptimizationConfig  `json:"pageOptimizationConfig"`
	PeriodicTuningState    *GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum `json:"periodicTuningState"`
	ServingConfigLists     []GoogleCloudRetailV2alphaModelServingConfigList      `json:"servingConfigLists"`
	ServingState           *GoogleCloudRetailV2alphaModelServingStateEnum        `json:"servingState"`
	TrainingState          *GoogleCloudRetailV2alphaModelTrainingStateEnum       `json:"trainingState"`
	TuningOperation        *string                                               `json:"tuningOperation"`
	Type                   *string                                               `json:"type"`
	UpdateTime             *string                                               `json:"updateTime"`
}
