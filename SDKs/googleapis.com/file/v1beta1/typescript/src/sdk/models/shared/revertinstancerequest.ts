import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RevertInstanceRequest
/** 
 * RevertInstanceRequest reverts the given instance's file share to the specified snapshot.
**/
export class RevertInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetSnapshotId" })
  targetSnapshotId?: string;
}
