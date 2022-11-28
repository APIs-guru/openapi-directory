import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// ListSnapshotsResponse
/** 
 * ListSnapshotsResponse is the result of ListSnapshotsRequest.
**/
export class ListSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: Snapshot })
  snapshots?: Snapshot[];
}
