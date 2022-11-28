import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryId } from "./gitlabrepositoryid";
/**
 * Proto Representing a GitLabRepository
**/
export declare class GitLabRepository extends SpeakeasyBase {
    browseUri?: string;
    description?: string;
    displayName?: string;
    name?: string;
    repositoryId?: GitLabRepositoryId;
}
