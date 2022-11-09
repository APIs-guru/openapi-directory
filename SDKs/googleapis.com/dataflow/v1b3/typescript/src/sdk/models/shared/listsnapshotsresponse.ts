import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Snapshot } from "./snapshot";


// ListSnapshotsResponse
/** 
 * List of snapshots.
**/
export class ListSnapshotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshots", elemType: shared.Snapshot })
  snapshots?: Snapshot[];
}
