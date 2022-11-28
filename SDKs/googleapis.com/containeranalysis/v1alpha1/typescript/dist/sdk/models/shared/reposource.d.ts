import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RepoSource describes the location of the source in a Google Cloud Source Repository.
**/
export declare class RepoSource extends SpeakeasyBase {
    branchName?: string;
    commitSha?: string;
    projectId?: string;
    repoName?: string;
    tagName?: string;
}
