import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWorkspaceId } from "./cloudworkspaceid";
/**
 * A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
**/
export declare class CloudWorkspaceSourceContext extends SpeakeasyBase {
    snapshotId?: string;
    workspaceId?: CloudWorkspaceId;
}
