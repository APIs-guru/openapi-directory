import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepoSource } from "./reposource";


// RunBuildTriggerRequest
/** 
 * Specifies a build trigger to run and the source to use.
**/
export class RunBuildTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=source" })
  source?: RepoSource;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
