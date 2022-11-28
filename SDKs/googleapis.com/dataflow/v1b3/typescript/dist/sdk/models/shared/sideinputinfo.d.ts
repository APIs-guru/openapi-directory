import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Information about a side input of a DoFn or an input of a SeqDoFn.
**/
export declare class SideInputInfo extends SpeakeasyBase {
    kind?: Map<string, any>;
    sources?: Source[];
    tag?: string;
}
