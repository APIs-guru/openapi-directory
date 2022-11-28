import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecognitionAudio } from "./recognitionaudio";
import { RecognitionConfigInput } from "./recognitionconfig";
import { TranscriptOutputConfig } from "./transcriptoutputconfig";



// LongRunningRecognizeRequestInput
/** 
 * The top-level message sent by the client for the `LongRunningRecognize` method.
**/
export class LongRunningRecognizeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: RecognitionAudio;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: RecognitionConfigInput;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: TranscriptOutputConfig;
}
