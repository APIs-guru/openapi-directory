import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VoiceSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    Male = "MALE",
    Female = "FEMALE",
    Neutral = "NEUTRAL"
}
/**
 * Description of a voice supported by the TTS service.
**/
export declare class Voice extends SpeakeasyBase {
    languageCodes?: string[];
    name?: string;
    naturalSampleRateHertz?: number;
    ssmlGender?: VoiceSsmlGenderEnum;
}
