import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AudioConfig } from "./audioconfig";
import { SynthesisInput } from "./synthesisinput";
import { VoiceSelectionParams } from "./voiceselectionparams";


// SynthesizeSpeechRequest
/** 
 * The top-level message sent by the client for the `SynthesizeSpeech` method.
**/
export class SynthesizeSpeechRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioConfig" })
  audioConfig?: AudioConfig;

  @Metadata({ data: "json, name=input" })
  input?: SynthesisInput;

  @Metadata({ data: "json, name=voice" })
  voice?: VoiceSelectionParams;
}
