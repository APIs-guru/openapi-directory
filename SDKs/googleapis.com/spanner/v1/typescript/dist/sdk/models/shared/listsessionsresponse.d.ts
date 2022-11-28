import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * The response for ListSessions.
**/
export declare class ListSessionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sessions?: Session[];
}
