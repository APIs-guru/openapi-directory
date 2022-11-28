import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// ListSnapshotsResponse
/** 
 * Response for the `ListSnapshots` method.
**/
export class ListSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: Snapshot })
  snapshots?: Snapshot[];
}
