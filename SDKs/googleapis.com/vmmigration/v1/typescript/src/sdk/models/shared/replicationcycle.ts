import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationCycle
/** 
 * ReplicationCycle contains information about the current replication cycle status.
**/
export class ReplicationCycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
