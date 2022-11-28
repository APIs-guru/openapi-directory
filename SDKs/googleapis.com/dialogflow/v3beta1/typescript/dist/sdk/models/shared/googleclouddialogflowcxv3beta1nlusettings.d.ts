import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum {
    ModelTrainingModeUnspecified = "MODEL_TRAINING_MODE_UNSPECIFIED",
    ModelTrainingModeAutomatic = "MODEL_TRAINING_MODE_AUTOMATIC",
    ModelTrainingModeManual = "MODEL_TRAINING_MODE_MANUAL"
}
export declare enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    ModelTypeStandard = "MODEL_TYPE_STANDARD",
    ModelTypeAdvanced = "MODEL_TYPE_ADVANCED"
}
/**
 * Settings related to NLU.
**/
export declare class GoogleCloudDialogflowCxV3beta1NluSettings extends SpeakeasyBase {
    classificationThreshold?: number;
    modelTrainingMode?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum;
    modelType?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum;
}
