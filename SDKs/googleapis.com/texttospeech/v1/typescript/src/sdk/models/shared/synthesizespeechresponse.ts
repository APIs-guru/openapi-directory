import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SynthesizeSpeechResponse
/** 
 * The message returned to the client by the `SynthesizeSpeech` method.
**/
export class SynthesizeSpeechResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioContent" })
  audioContent?: string;
}
