import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecognitionAudio
/** 
 * Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
**/
export class RecognitionAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
