import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum {
    ModelTrainingModeUnspecified = "MODEL_TRAINING_MODE_UNSPECIFIED",
    ModelTrainingModeAutomatic = "MODEL_TRAINING_MODE_AUTOMATIC",
    ModelTrainingModeManual = "MODEL_TRAINING_MODE_MANUAL"
}

export enum GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    ModelTypeStandard = "MODEL_TYPE_STANDARD",
    ModelTypeAdvanced = "MODEL_TYPE_ADVANCED"
}


// GoogleCloudDialogflowCxV3NluSettings
/** 
 * Settings related to NLU.
**/
export class GoogleCloudDialogflowCxV3NluSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationThreshold" })
  classificationThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=modelTrainingMode" })
  modelTrainingMode?: GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum;
}
