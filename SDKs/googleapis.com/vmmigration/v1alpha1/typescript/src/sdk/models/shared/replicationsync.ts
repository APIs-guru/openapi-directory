import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationSync
/** 
 * ReplicationSync contain information about the last replica sync to the cloud.
**/
export class ReplicationSync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;
}
