import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    SsmlVoiceGenderMale = "SSML_VOICE_GENDER_MALE",
    SsmlVoiceGenderFemale = "SSML_VOICE_GENDER_FEMALE",
    SsmlVoiceGenderNeutral = "SSML_VOICE_GENDER_NEUTRAL"
}
/**
 * Description of which voice to use for speech synthesis.
**/
export declare class GoogleCloudDialogflowCxV3beta1VoiceSelectionParams extends SpeakeasyBase {
    name?: string;
    ssmlGender?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGenderEnum;
}
