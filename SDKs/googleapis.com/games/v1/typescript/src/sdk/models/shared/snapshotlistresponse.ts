import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// SnapshotListResponse
/** 
 * A third party list snapshots response.
**/
export class SnapshotListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Snapshot })
  items?: Snapshot[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
