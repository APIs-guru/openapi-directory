import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * The response for ListBackups.
**/
export declare class ListBackupsResponse extends SpeakeasyBase {
    backups?: Backup[];
    nextPageToken?: string;
}
