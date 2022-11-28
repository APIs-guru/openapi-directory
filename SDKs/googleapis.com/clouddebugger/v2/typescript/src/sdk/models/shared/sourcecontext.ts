import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudRepoSourceContext } from "./cloudreposourcecontext";
import { CloudWorkspaceSourceContext } from "./cloudworkspacesourcecontext";
import { GerritSourceContext } from "./gerritsourcecontext";
import { GitSourceContext } from "./gitsourcecontext";



// SourceContext
/** 
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
**/
export class SourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudRepo" })
  cloudRepo?: CloudRepoSourceContext;

  @SpeakeasyMetadata({ data: "json, name=cloudWorkspace" })
  cloudWorkspace?: CloudWorkspaceSourceContext;

  @SpeakeasyMetadata({ data: "json, name=gerrit" })
  gerrit?: GerritSourceContext;

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: GitSourceContext;
}
