import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


// ReadInstruction
/** 
 * An instruction that reads records. Takes no inputs, produces one output.
**/
export class ReadInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: Source;
}
