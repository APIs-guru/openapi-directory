import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";



// ListWorkspacesResponse
/** 
 * A list of workspaces in a container.
**/
export class ListWorkspacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace", elemType: Workspace })
  workspace?: Workspace[];
}
