import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackupRun } from "./backuprun";


// BackupRunsListResponse
/** 
 * Backup run list results.
**/
export class BackupRunsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BackupRun })
  items?: BackupRun[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
