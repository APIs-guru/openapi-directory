import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { Sink } from "./sink";
/**
 * An instruction that writes records. Takes one input, produces no outputs.
**/
export declare class WriteInstruction extends SpeakeasyBase {
    input?: InstructionInput;
    sink?: Sink;
}
