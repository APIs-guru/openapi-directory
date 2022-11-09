import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubsubSnapshotMetadata
/** 
 * Represents a Pubsub snapshot.
**/
export class PubsubSnapshotMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=snapshotName" })
  snapshotName?: string;

  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
