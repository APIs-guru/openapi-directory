import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RevertInstanceRequest
/** 
 * RevertInstanceRequest reverts the given instance's file share to the specified snapshot.
**/
export class RevertInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetSnapshotId" })
  targetSnapshotId?: string;
}
