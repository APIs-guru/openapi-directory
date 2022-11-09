import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstructionInput } from "./instructioninput";
import { Sink } from "./sink";


// WriteInstruction
/** 
 * An instruction that writes records. Takes one input, produces no outputs.
**/
export class WriteInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: InstructionInput;

  @Metadata({ data: "json, name=sink" })
  sink?: Sink;
}
