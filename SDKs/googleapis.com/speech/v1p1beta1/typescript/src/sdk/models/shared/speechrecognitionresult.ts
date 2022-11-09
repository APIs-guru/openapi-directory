import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SpeechRecognitionAlternative } from "./speechrecognitionalternative";


// SpeechRecognitionResult
/** 
 * A speech recognition result corresponding to a portion of the audio.
**/
export class SpeechRecognitionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternatives", elemType: shared.SpeechRecognitionAlternative })
  alternatives?: SpeechRecognitionAlternative[];

  @Metadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=resultEndTime" })
  resultEndTime?: string;
}
