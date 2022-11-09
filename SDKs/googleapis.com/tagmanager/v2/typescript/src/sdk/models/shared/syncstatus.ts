import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SyncStatus
/** 
 * The status of a workspace after synchronization.
**/
export class SyncStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=mergeConflict" })
  mergeConflict?: boolean;

  @Metadata({ data: "json, name=syncError" })
  syncError?: boolean;
}
