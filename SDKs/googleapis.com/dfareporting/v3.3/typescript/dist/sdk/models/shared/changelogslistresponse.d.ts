import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeLog } from "./changelog";
/**
 * Change Log List Response
**/
export declare class ChangeLogsListResponse extends SpeakeasyBase {
    changeLogs?: ChangeLog[];
    kind?: string;
    nextPageToken?: string;
}
