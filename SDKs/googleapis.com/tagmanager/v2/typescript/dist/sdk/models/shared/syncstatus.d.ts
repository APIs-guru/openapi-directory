import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of a workspace after synchronization.
**/
export declare class SyncStatus extends SpeakeasyBase {
    mergeConflict?: boolean;
    syncError?: boolean;
}
