import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstructionInput } from "./instructioninput";
import { MultiOutputInfo } from "./multioutputinfo";
import { SideInputInfo } from "./sideinputinfo";


// ParDoInstruction
/** 
 * An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
**/
export class ParDoInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: InstructionInput;

  @Metadata({ data: "json, name=multiOutputInfos", elemType: shared.MultiOutputInfo })
  multiOutputInfos?: MultiOutputInfo[];

  @Metadata({ data: "json, name=numOutputs" })
  numOutputs?: number;

  @Metadata({ data: "json, name=sideInputs", elemType: shared.SideInputInfo })
  sideInputs?: SideInputInfo[];

  @Metadata({ data: "json, name=userFn" })
  userFn?: Map<string, any>;
}
