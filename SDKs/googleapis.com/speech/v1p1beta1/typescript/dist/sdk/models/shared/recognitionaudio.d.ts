import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
**/
export declare class RecognitionAudio extends SpeakeasyBase {
    content?: string;
    uri?: string;
}
