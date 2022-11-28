import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { Sink } from "./sink";



// WriteInstruction
/** 
 * An instruction that writes records. Takes one input, produces no outputs.
**/
export class WriteInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: InstructionInput;

  @SpeakeasyMetadata({ data: "json, name=sink" })
  sink?: Sink;
}
