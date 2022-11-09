import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogSink } from "./logsink";
/**
 * Result returned from ListSinks.
**/
export declare class ListSinksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sinks?: LogSink[];
}
