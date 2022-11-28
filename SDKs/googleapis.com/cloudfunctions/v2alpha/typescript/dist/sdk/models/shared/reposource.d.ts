import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location of the source in a Google Cloud Source Repository.
**/
export declare class RepoSource extends SpeakeasyBase {
    branchName?: string;
    commitSha?: string;
    dir?: string;
    invertRegex?: boolean;
    projectId?: string;
    repoName?: string;
    tagName?: string;
}
