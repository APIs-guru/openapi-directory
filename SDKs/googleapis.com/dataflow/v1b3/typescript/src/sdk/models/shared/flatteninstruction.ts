import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstructionInput } from "./instructioninput";


// FlattenInstruction
/** 
 * An instruction that copies its inputs (zero or more) to its (single) output.
**/
export class FlattenInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.InstructionInput })
  inputs?: InstructionInput[];
}
