import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfig } from "./recognitionconfig";
import { TranscriptOutputConfig } from "./transcriptoutputconfig";


// LongRunningRecognizeRequest
/** 
 * The top-level message sent by the client for the `LongRunningRecognize` method.
**/
export class LongRunningRecognizeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: RecognitionAudio;

  @Metadata({ data: "json, name=config" })
  config?: RecognitionConfig;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: TranscriptOutputConfig;
}
