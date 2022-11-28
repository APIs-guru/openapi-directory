import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GitRepoSourceRepoTypeEnum {
    Unknown = "UNKNOWN",
    CloudSourceRepositories = "CLOUD_SOURCE_REPOSITORIES",
    Github = "GITHUB",
    BitbucketServer = "BITBUCKET_SERVER"
}
/**
 * GitRepoSource describes a repo and ref of a code repository.
**/
export declare class GitRepoSource extends SpeakeasyBase {
    bitbucketServerConfig?: string;
    githubEnterpriseConfig?: string;
    ref?: string;
    repoType?: GitRepoSourceRepoTypeEnum;
    uri?: string;
}
