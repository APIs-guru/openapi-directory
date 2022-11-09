import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SaveSnapshotRequest
/** 
 * Request to create a snapshot of a Cloud Composer environment.
**/
export class SaveSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshotLocation" })
  snapshotLocation?: string;
}
