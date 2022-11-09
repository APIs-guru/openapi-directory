import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Backup } from "./backup";
/**
 * Response message for ListBackups.
**/
export declare class ListBackupsResponse extends SpeakeasyBase {
    backups?: Backup[];
    nextPageToken?: string;
}
