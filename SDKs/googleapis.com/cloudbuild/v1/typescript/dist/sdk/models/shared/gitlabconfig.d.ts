import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";
import { GitLabEnterpriseConfig } from "./gitlabenterpriseconfig";
import { GitLabSecrets } from "./gitlabsecrets";
import { GitLabRepositoryId } from "./gitlabrepositoryid";
/**
 * GitLabConfig represents the configuration for a GitLab integration.
**/
export declare class GitLabConfigInput extends SpeakeasyBase {
    connectedRepositories?: GitLabRepositoryIdInput[];
    enterpriseConfig?: GitLabEnterpriseConfig;
    name?: string;
    secrets?: GitLabSecrets;
    username?: string;
}
/**
 * GitLabConfig represents the configuration for a GitLab integration.
**/
export declare class GitLabConfig extends SpeakeasyBase {
    connectedRepositories?: GitLabRepositoryId[];
    createTime?: string;
    enterpriseConfig?: GitLabEnterpriseConfig;
    name?: string;
    secrets?: GitLabSecrets;
    username?: string;
    webhookKey?: string;
}
