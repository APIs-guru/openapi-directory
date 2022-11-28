import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { SideInputInfo } from "./sideinputinfo";
/**
 * An instruction that does a partial group-by-key. One input and one output.
**/
export declare class PartialGroupByKeyInstruction extends SpeakeasyBase {
    input?: InstructionInput;
    inputElementCodec?: Map<string, any>;
    originalCombineValuesInputStoreName?: string;
    originalCombineValuesStepName?: string;
    sideInputs?: SideInputInfo[];
    valueCombiningFn?: Map<string, any>;
}
