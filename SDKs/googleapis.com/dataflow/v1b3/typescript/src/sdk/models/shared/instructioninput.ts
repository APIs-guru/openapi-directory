import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstructionInput
/** 
 * An input of an instruction, as a reference to an output of a producer instruction.
**/
export class InstructionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputNum" })
  outputNum?: number;

  @Metadata({ data: "json, name=producerInstructionIndex" })
  producerInstructionIndex?: number;
}
