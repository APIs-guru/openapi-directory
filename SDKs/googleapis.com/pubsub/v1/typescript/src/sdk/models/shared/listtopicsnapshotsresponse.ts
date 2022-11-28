import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTopicSnapshotsResponse
/** 
 * Response for the `ListTopicSnapshots` method.
**/
export class ListTopicSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshots" })
  snapshots?: string[];
}
