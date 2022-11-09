import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VoiceSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED"
,    Male = "MALE"
,    Female = "FEMALE"
,    Neutral = "NEUTRAL"
}


// Voice
/** 
 * Description of a voice supported by the TTS service.
**/
export class Voice extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCodes" })
  languageCodes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=naturalSampleRateHertz" })
  naturalSampleRateHertz?: number;

  @Metadata({ data: "json, name=ssmlGender" })
  ssmlGender?: VoiceSsmlGenderEnum;
}
