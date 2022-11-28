import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstructionInput
/** 
 * An input of an instruction, as a reference to an output of a producer instruction.
**/
export class InstructionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputNum" })
  outputNum?: number;

  @SpeakeasyMetadata({ data: "json, name=producerInstructionIndex" })
  producerInstructionIndex?: number;
}
