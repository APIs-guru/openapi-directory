import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workspace } from "./workspace";


// ListWorkspacesResponse
/** 
 * A list of workspaces in a container.
**/
export class ListWorkspacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workspace", elemType: shared.Workspace })
  workspace?: Workspace[];
}
