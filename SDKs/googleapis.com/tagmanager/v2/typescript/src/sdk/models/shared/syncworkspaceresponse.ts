import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MergeConflict } from "./mergeconflict";
import { SyncStatus } from "./syncstatus";


// SyncWorkspaceResponse
/** 
 * A response after synchronizing the workspace to the latest container version.
**/
export class SyncWorkspaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mergeConflict", elemType: shared.MergeConflict })
  mergeConflict?: MergeConflict[];

  @Metadata({ data: "json, name=syncStatus" })
  syncStatus?: SyncStatus;
}
