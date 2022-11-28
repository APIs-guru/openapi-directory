import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
**/
export declare class SynthesisInput extends SpeakeasyBase {
    ssml?: string;
    text?: string;
}
