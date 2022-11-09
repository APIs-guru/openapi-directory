import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfig } from "./recognitionconfig";


// RecognizeRequest
/** 
 * The top-level message sent by the client for the `Recognize` method.
**/
export class RecognizeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: RecognitionAudio;

  @Metadata({ data: "json, name=config" })
  config?: RecognitionConfig;
}
