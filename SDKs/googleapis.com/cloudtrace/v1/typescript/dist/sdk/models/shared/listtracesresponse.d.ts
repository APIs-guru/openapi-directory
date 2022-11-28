import { SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";
/**
 * The response message for the `ListTraces` method.
**/
export declare class ListTracesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    traces?: Trace[];
}
