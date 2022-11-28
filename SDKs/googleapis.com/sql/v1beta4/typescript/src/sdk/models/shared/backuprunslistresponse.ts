import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupRun } from "./backuprun";



// BackupRunsListResponse
/** 
 * Backup run list results.
**/
export class BackupRunsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BackupRun })
  items?: BackupRun[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
