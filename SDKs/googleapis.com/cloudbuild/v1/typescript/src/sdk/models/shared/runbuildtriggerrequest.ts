import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";



// RunBuildTriggerRequest
/** 
 * Specifies a build trigger to run and the source to use.
**/
export class RunBuildTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
