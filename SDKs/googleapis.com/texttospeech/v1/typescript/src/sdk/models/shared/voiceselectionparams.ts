import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomVoiceParams } from "./customvoiceparams";


export enum VoiceSelectionParamsSsmlGenderEnum {
    SsmlVoiceGenderUnspecified = "SSML_VOICE_GENDER_UNSPECIFIED",
    Male = "MALE",
    Female = "FEMALE",
    Neutral = "NEUTRAL"
}


// VoiceSelectionParams
/** 
 * Description of which voice to use for a synthesis request.
**/
export class VoiceSelectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customVoice" })
  customVoice?: CustomVoiceParams;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ssmlGender" })
  ssmlGender?: VoiceSelectionParamsSsmlGenderEnum;
}
