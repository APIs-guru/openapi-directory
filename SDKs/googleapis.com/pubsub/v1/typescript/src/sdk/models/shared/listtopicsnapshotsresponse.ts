import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTopicSnapshotsResponse
/** 
 * Response for the `ListTopicSnapshots` method.
**/
export class ListTopicSnapshotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=snapshots" })
  snapshots?: string[];
}
