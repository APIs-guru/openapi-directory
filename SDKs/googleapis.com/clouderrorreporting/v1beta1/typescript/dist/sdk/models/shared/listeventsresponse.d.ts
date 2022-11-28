import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorEvent } from "./errorevent";
/**
 * Contains a set of requested error events.
**/
export declare class ListEventsResponse extends SpeakeasyBase {
    errorEvents?: ErrorEvent[];
    nextPageToken?: string;
    timeRangeBegin?: string;
}
