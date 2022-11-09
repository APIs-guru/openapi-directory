import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRepoSourceContext } from "./cloudreposourcecontext";
import { GerritSourceContext } from "./gerritsourcecontext";
import { GitSourceContext } from "./gitsourcecontext";


// SourceContext
/** 
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
**/
export class SourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudRepo" })
  cloudRepo?: CloudRepoSourceContext;

  @Metadata({ data: "json, name=gerrit" })
  gerrit?: GerritSourceContext;

  @Metadata({ data: "json, name=git" })
  git?: GitSourceContext;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
