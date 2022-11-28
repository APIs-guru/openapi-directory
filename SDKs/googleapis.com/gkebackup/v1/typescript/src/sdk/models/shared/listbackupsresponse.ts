import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



// ListBackupsResponse
/** 
 * Response message for ListBackups.
**/
export class ListBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups", elemType: Backup })
  backups?: Backup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
