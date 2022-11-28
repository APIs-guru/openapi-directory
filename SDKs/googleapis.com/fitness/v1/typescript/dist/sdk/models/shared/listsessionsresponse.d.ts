import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
export declare class ListSessionsResponse extends SpeakeasyBase {
    deletedSession?: Session[];
    hasMoreData?: boolean;
    nextPageToken?: string;
    session?: Session[];
}
