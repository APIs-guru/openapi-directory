import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomVoiceParams } from "./customvoiceparams";
export declare enum VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    Male = "MALE",
    Female = "FEMALE",
    Neutral = "NEUTRAL"
}
/**
 * Description of which voice to use for a synthesis request.
**/
export declare class VoiceSelectionParams extends SpeakeasyBase {
    customVoice?: CustomVoiceParams;
    languageCode?: string;
    name?: string;
    ssmlGender?: VoiceSelectionParamsSsmlGenderEnum;
}
