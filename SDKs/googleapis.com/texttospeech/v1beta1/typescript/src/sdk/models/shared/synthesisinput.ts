import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SynthesisInput
/** 
 * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
**/
export class SynthesisInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssml" })
  ssml?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
