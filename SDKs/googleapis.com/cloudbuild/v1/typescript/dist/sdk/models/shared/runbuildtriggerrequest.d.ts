import { SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
/**
 * Specifies a build trigger to run and the source to use.
**/
export declare class RunBuildTriggerRequest extends SpeakeasyBase {
    projectId?: string;
    source?: RepoSource;
    triggerId?: string;
}
