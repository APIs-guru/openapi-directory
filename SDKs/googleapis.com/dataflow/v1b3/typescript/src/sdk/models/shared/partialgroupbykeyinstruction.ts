import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { SideInputInfo } from "./sideinputinfo";



// PartialGroupByKeyInstruction
/** 
 * An instruction that does a partial group-by-key. One input and one output.
**/
export class PartialGroupByKeyInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: InstructionInput;

  @SpeakeasyMetadata({ data: "json, name=inputElementCodec" })
  inputElementCodec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=originalCombineValuesInputStoreName" })
  originalCombineValuesInputStoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=originalCombineValuesStepName" })
  originalCombineValuesStepName?: string;

  @SpeakeasyMetadata({ data: "json, name=sideInputs", elemType: SideInputInfo })
  sideInputs?: SideInputInfo[];

  @SpeakeasyMetadata({ data: "json, name=valueCombiningFn" })
  valueCombiningFn?: Map<string, any>;
}
