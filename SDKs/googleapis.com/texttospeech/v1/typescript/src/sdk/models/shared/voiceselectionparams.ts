import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomVoiceParams } from "./customvoiceparams";

export enum VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED"
,    Male = "MALE"
,    Female = "FEMALE"
,    Neutral = "NEUTRAL"
}


// VoiceSelectionParams
/** 
 * Description of which voice to use for a synthesis request.
**/
export class VoiceSelectionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=customVoice" })
  customVoice?: CustomVoiceParams;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ssmlGender" })
  ssmlGender?: VoiceSelectionParamsSsmlGenderEnum;
}
