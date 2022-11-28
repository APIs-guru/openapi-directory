import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";



// ReadInstruction
/** 
 * An instruction that reads records. Takes no inputs, produces one output.
**/
export class ReadInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
