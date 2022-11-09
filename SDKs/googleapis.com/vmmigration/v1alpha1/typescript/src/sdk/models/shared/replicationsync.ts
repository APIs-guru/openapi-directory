import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationSync
/** 
 * ReplicationSync contain information about the last replica sync to the cloud.
**/
export class ReplicationSync extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;
}
