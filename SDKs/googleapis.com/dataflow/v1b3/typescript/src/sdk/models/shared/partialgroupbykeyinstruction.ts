import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstructionInput } from "./instructioninput";
import { SideInputInfo } from "./sideinputinfo";


// PartialGroupByKeyInstruction
/** 
 * An instruction that does a partial group-by-key. One input and one output.
**/
export class PartialGroupByKeyInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: InstructionInput;

  @Metadata({ data: "json, name=inputElementCodec" })
  inputElementCodec?: Map<string, any>;

  @Metadata({ data: "json, name=originalCombineValuesInputStoreName" })
  originalCombineValuesInputStoreName?: string;

  @Metadata({ data: "json, name=originalCombineValuesStepName" })
  originalCombineValuesStepName?: string;

  @Metadata({ data: "json, name=sideInputs", elemType: shared.SideInputInfo })
  sideInputs?: SideInputInfo[];

  @Metadata({ data: "json, name=valueCombiningFn" })
  valueCombiningFn?: Map<string, any>;
}
