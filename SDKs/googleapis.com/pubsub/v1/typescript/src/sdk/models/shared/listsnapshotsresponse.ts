import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Snapshot } from "./snapshot";


// ListSnapshotsResponse
/** 
 * Response for the `ListSnapshots` method.
**/
export class ListSnapshotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=snapshots", elemType: shared.Snapshot })
  snapshots?: Snapshot[];
}
