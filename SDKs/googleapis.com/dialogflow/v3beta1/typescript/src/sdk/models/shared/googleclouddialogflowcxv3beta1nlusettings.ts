import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum {
    ModelTrainingModeUnspecified = "MODEL_TRAINING_MODE_UNSPECIFIED"
,    ModelTrainingModeAutomatic = "MODEL_TRAINING_MODE_AUTOMATIC"
,    ModelTrainingModeManual = "MODEL_TRAINING_MODE_MANUAL"
}

export enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED"
,    ModelTypeStandard = "MODEL_TYPE_STANDARD"
,    ModelTypeAdvanced = "MODEL_TYPE_ADVANCED"
}


// GoogleCloudDialogflowCxV3beta1NluSettings
/** 
 * Settings related to NLU.
**/
export class GoogleCloudDialogflowCxV3beta1NluSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationThreshold" })
  classificationThreshold?: number;

  @Metadata({ data: "json, name=modelTrainingMode" })
  modelTrainingMode?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum;

  @Metadata({ data: "json, name=modelType" })
  modelType?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum;
}
