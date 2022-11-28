import { SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";
/**
 * A list of workspaces in a container.
**/
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    workspace?: Workspace[];
}
