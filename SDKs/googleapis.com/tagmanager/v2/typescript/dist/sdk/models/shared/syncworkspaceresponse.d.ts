import { SpeakeasyBase } from "../../../internal/utils";
import { MergeConflict } from "./mergeconflict";
import { SyncStatus } from "./syncstatus";
/**
 * A response after synchronizing the workspace to the latest container version.
**/
export declare class SyncWorkspaceResponse extends SpeakeasyBase {
    mergeConflict?: MergeConflict[];
    syncStatus?: SyncStatus;
}
