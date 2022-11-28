import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    SsmlVoiceGenderMale = "SSML_VOICE_GENDER_MALE",
    SsmlVoiceGenderFemale = "SSML_VOICE_GENDER_FEMALE",
    SsmlVoiceGenderNeutral = "SSML_VOICE_GENDER_NEUTRAL"
}
/**
 * Description of which voice to use for speech synthesis.
**/
export declare class GoogleCloudDialogflowCxV3VoiceSelectionParams extends SpeakeasyBase {
    name?: string;
    ssmlGender?: GoogleCloudDialogflowCxV3VoiceSelectionParamsSsmlGenderEnum;
}
