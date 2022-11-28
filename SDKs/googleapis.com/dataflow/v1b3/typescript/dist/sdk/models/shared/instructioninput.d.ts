import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An input of an instruction, as a reference to an output of a producer instruction.
**/
export declare class InstructionInput extends SpeakeasyBase {
    outputNum?: number;
    producerInstructionIndex?: number;
}
