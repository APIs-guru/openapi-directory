import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum {
    ModelTrainingModeUnspecified = "MODEL_TRAINING_MODE_UNSPECIFIED",
    ModelTrainingModeAutomatic = "MODEL_TRAINING_MODE_AUTOMATIC",
    ModelTrainingModeManual = "MODEL_TRAINING_MODE_MANUAL"
}
export declare enum GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    ModelTypeStandard = "MODEL_TYPE_STANDARD",
    ModelTypeAdvanced = "MODEL_TYPE_ADVANCED"
}
/**
 * Settings related to NLU.
**/
export declare class GoogleCloudDialogflowCxV3NluSettings extends SpeakeasyBase {
    classificationThreshold?: number;
    modelTrainingMode?: GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum;
    modelType?: GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum;
}
