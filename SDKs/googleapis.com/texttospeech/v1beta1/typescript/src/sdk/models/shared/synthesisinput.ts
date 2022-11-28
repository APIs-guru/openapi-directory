import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SynthesisInput
/** 
 * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
**/
export class SynthesisInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssml" })
  ssml?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
