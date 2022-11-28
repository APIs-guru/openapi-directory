import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// ListSnapshotsResponse
/** 
 * List of snapshots.
**/
export class ListSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: Snapshot })
  snapshots?: Snapshot[];
}
