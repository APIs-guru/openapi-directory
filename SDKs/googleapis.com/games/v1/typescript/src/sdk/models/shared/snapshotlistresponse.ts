import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Snapshot } from "./snapshot";


// SnapshotListResponse
/** 
 * A third party list snapshots response.
**/
export class SnapshotListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Snapshot })
  items?: Snapshot[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
