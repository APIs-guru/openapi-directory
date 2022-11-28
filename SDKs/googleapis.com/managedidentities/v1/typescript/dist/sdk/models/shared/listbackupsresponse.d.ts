import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * ListBackupsResponse is the response message for ListBackups method.
**/
export declare class ListBackupsResponse extends SpeakeasyBase {
    backups?: Backup[];
    nextPageToken?: string;
    unreachable?: string[];
}
