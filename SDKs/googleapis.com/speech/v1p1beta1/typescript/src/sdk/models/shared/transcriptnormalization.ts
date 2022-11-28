import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entry } from "./entry";



// TranscriptNormalization
/** 
 * Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
**/
export class TranscriptNormalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: Entry })
  entries?: Entry[];
}
