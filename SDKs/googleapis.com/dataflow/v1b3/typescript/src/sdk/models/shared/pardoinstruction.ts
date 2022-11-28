import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstructionInput } from "./instructioninput";
import { MultiOutputInfo } from "./multioutputinfo";
import { SideInputInfo } from "./sideinputinfo";



// ParDoInstruction
/** 
 * An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
**/
export class ParDoInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: InstructionInput;

  @SpeakeasyMetadata({ data: "json, name=multiOutputInfos", elemType: MultiOutputInfo })
  multiOutputInfos?: MultiOutputInfo[];

  @SpeakeasyMetadata({ data: "json, name=numOutputs" })
  numOutputs?: number;

  @SpeakeasyMetadata({ data: "json, name=sideInputs", elemType: SideInputInfo })
  sideInputs?: SideInputInfo[];

  @SpeakeasyMetadata({ data: "json, name=userFn" })
  userFn?: Map<string, any>;
}
