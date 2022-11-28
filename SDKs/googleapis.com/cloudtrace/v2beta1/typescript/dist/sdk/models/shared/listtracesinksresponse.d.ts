import { SpeakeasyBase } from "../../../internal/utils";
import { TraceSink } from "./tracesink";
/**
 * Result returned from `ListTraceSinks`.
**/
export declare class ListTraceSinksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sinks?: TraceSink[];
}
