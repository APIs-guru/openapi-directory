import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRepoSourceContext } from "./cloudreposourcecontext";
import { CloudWorkspaceSourceContext } from "./cloudworkspacesourcecontext";
import { GerritSourceContext } from "./gerritsourcecontext";
import { GitSourceContext } from "./gitsourcecontext";
/**
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
**/
export declare class SourceContext extends SpeakeasyBase {
    cloudRepo?: CloudRepoSourceContext;
    cloudWorkspace?: CloudWorkspaceSourceContext;
    gerrit?: GerritSourceContext;
    git?: GitSourceContext;
}
