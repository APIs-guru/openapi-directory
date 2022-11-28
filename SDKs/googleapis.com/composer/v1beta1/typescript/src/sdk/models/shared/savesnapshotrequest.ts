import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SaveSnapshotRequest
/** 
 * Request to create a snapshot of a Cloud Composer environment.
**/
export class SaveSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshotLocation" })
  snapshotLocation?: string;
}
