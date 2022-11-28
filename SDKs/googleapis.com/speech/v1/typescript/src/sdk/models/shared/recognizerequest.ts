import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfigInput } from "./recognitionconfig";



// RecognizeRequestInput
/** 
 * The top-level message sent by the client for the `Recognize` method.
**/
export class RecognizeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: RecognitionAudio;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: RecognitionConfigInput;
}
