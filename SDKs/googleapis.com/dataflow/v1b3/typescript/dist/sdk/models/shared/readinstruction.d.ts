import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * An instruction that reads records. Takes no inputs, produces one output.
**/
export declare class ReadInstruction extends SpeakeasyBase {
    source?: Source;
}
