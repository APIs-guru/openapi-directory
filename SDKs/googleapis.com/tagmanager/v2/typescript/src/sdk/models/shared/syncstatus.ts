import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SyncStatus
/** 
 * The status of a workspace after synchronization.
**/
export class SyncStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mergeConflict" })
  mergeConflict?: boolean;

  @SpeakeasyMetadata({ data: "json, name=syncError" })
  syncError?: boolean;
}
