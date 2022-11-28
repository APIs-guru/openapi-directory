import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
/**
 * An instruction that copies its inputs (zero or more) to its (single) output.
**/
export declare class FlattenInstruction extends SpeakeasyBase {
    inputs?: InstructionInput[];
}
