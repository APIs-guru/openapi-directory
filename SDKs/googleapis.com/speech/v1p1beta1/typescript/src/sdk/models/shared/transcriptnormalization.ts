import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entry } from "./entry";


// TranscriptNormalization
/** 
 * Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
**/
export class TranscriptNormalization extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.Entry })
  entries?: Entry[];
}
