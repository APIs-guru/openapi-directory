import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWorkspaceId } from "./cloudworkspaceid";


// CloudWorkspaceSourceContext
/** 
 * A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
**/
export class CloudWorkspaceSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId?: CloudWorkspaceId;
}
