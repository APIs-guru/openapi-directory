import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED"
,    SsmlVoiceGenderMale = "SSML_VOICE_GENDER_MALE"
,    SsmlVoiceGenderFemale = "SSML_VOICE_GENDER_FEMALE"
,    SsmlVoiceGenderNeutral = "SSML_VOICE_GENDER_NEUTRAL"
}


// GoogleCloudDialogflowV2VoiceSelectionParams
/** 
 * Description of which voice to use for speech synthesis.
**/
export class GoogleCloudDialogflowV2VoiceSelectionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ssmlGender" })
  ssmlGender?: GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
}
