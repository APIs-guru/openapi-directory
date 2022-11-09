import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED"
,    SsmlVoiceGenderMale = "SSML_VOICE_GENDER_MALE"
,    SsmlVoiceGenderFemale = "SSML_VOICE_GENDER_FEMALE"
,    SsmlVoiceGenderNeutral = "SSML_VOICE_GENDER_NEUTRAL"
}


// GoogleCloudDialogflowCxV3VoiceSelectionParams
/** 
 * Description of which voice to use for speech synthesis.
**/
export class GoogleCloudDialogflowCxV3VoiceSelectionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ssmlGender" })
  ssmlGender?: GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum;
}
