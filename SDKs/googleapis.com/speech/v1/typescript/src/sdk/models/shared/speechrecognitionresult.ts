import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpeechRecognitionAlternative } from "./speechrecognitionalternative";



// SpeechRecognitionResult
/** 
 * A speech recognition result corresponding to a portion of the audio.
**/
export class SpeechRecognitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternatives", elemType: SpeechRecognitionAlternative })
  alternatives?: SpeechRecognitionAlternative[];

  @SpeakeasyMetadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=resultEndTime" })
  resultEndTime?: string;
}
