import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";



// FlattenInstruction
/** 
 * An instruction that copies its inputs (zero or more) to its (single) output.
**/
export class FlattenInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: InstructionInput })
  inputs?: InstructionInput[];
}
