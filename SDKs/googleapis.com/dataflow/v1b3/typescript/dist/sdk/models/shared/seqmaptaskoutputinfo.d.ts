import { SpeakeasyBase } from "../../../internal/utils";
import { Sink } from "./sink";
/**
 * Information about an output of a SeqMapTask.
**/
export declare class SeqMapTaskOutputInfo extends SpeakeasyBase {
    sink?: Sink;
    tag?: string;
}
