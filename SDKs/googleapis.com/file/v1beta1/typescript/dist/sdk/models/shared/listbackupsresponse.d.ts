import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Backup } from "./backup";
/**
 * ListBackupsResponse is the result of ListBackupsRequest.
**/
export declare class ListBackupsResponse extends SpeakeasyBase {
    backups?: Backup[];
    nextPageToken?: string;
    unreachable?: string[];
}
