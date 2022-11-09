import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Backup } from "./backup";


// ListBackupsResponse
/** 
 * The response for ListBackups.
**/
export class ListBackupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups", elemType: shared.Backup })
  backups?: Backup[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
