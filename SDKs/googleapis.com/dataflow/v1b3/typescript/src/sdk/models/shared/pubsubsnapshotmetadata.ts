import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubSnapshotMetadata
/** 
 * Represents a Pubsub snapshot.
**/
export class PubsubSnapshotMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotName" })
  snapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
