import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWorkspaceId } from "./cloudworkspaceid";



// CloudWorkspaceSourceContext
/** 
 * A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
**/
export class CloudWorkspaceSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: CloudWorkspaceId;
}
