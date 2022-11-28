import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



// ListBackupsResponse
/** 
 * ListBackupsResponse is the response message for ListBackups method.
**/
export class ListBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups", elemType: Backup })
  backups?: Backup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
