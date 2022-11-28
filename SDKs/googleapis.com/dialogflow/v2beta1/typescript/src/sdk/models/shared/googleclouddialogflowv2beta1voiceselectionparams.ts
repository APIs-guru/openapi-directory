import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    SsmlVoiceGenderMale = "SSML_VOICE_GENDER_MALE",
    SsmlVoiceGenderFemale = "SSML_VOICE_GENDER_FEMALE",
    SsmlVoiceGenderNeutral = "SSML_VOICE_GENDER_NEUTRAL"
}


// GoogleCloudDialogflowV2beta1VoiceSelectionParams
/** 
 * Description of which voice to use for speech synthesis.
**/
export class GoogleCloudDialogflowV2beta1VoiceSelectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ssmlGender" })
  ssmlGender?: GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum;
}
