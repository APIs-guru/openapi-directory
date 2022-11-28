package shared

type GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum string

const (
	GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnumModelTrainingModeUnspecified GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum = "MODEL_TRAINING_MODE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnumModelTrainingModeAutomatic   GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum = "MODEL_TRAINING_MODE_AUTOMATIC"
	GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnumModelTrainingModeManual      GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum = "MODEL_TRAINING_MODE_MANUAL"
)

type GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum string

const (
	GoogleCloudDialogflowCxV3NluSettingsModelTypeEnumModelTypeUnspecified GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum = "MODEL_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3NluSettingsModelTypeEnumModelTypeStandard    GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum = "MODEL_TYPE_STANDARD"
	GoogleCloudDialogflowCxV3NluSettingsModelTypeEnumModelTypeAdvanced    GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum = "MODEL_TYPE_ADVANCED"
)

// GoogleCloudDialogflowCxV3NluSettings
// Settings related to NLU.
type GoogleCloudDialogflowCxV3NluSettings struct {
	ClassificationThreshold *float32                                                   `json:"classificationThreshold,omitempty"`
	ModelTrainingMode       *GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum `json:"modelTrainingMode,omitempty"`
	ModelType               *GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum         `json:"modelType,omitempty"`
}
