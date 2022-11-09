import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SynthesizeSpeechResponse
/** 
 * The message returned to the client by the `SynthesizeSpeech` method.
**/
export class SynthesizeSpeechResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioContent" })
  audioContent?: string;
}
