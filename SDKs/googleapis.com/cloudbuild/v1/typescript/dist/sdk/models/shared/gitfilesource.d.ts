import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GitFileSourceRepoTypeEnum {
    Unknown = "UNKNOWN",
    CloudSourceRepositories = "CLOUD_SOURCE_REPOSITORIES",
    Github = "GITHUB",
    BitbucketServer = "BITBUCKET_SERVER"
}
/**
 * GitFileSource describes a file within a (possibly remote) code repository.
**/
export declare class GitFileSource extends SpeakeasyBase {
    bitbucketServerConfig?: string;
    githubEnterpriseConfig?: string;
    path?: string;
    repoType?: GitFileSourceRepoTypeEnum;
    revision?: string;
    uri?: string;
}
