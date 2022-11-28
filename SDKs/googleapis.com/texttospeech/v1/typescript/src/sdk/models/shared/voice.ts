import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VoiceSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    Male = "MALE",
    Female = "FEMALE",
    Neutral = "NEUTRAL"
}


// Voice
/** 
 * Description of a voice supported by the TTS service.
**/
export class Voice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCodes" })
  languageCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=naturalSampleRateHertz" })
  naturalSampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=ssmlGender" })
  ssmlGender?: VoiceSsmlGenderEnum;
}
