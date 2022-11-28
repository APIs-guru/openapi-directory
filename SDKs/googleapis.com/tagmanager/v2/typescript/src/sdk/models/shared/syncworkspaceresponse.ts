import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeConflict } from "./mergeconflict";
import { SyncStatus } from "./syncstatus";



// SyncWorkspaceResponse
/** 
 * A response after synchronizing the workspace to the latest container version.
**/
export class SyncWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mergeConflict", elemType: MergeConflict })
  mergeConflict?: MergeConflict[];

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: SyncStatus;
}
