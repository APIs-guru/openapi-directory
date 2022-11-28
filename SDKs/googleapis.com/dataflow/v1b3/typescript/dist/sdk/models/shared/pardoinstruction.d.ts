import { SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { MultiOutputInfo } from "./multioutputinfo";
import { SideInputInfo } from "./sideinputinfo";
/**
 * An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
**/
export declare class ParDoInstruction extends SpeakeasyBase {
    input?: InstructionInput;
    multiOutputInfos?: MultiOutputInfo[];
    numOutputs?: number;
    sideInputs?: SideInputInfo[];
    userFn?: Map<string, any>;
}
