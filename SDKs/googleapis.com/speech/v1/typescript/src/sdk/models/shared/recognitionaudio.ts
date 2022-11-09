import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecognitionAudio
/** 
 * Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
**/
export class RecognitionAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
