import { SpeakeasyBase } from "../../../internal/utils";
import { GitHubEnterpriseSecrets } from "./githubenterprisesecrets";
/**
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
export declare class GitHubEnterpriseConfig extends SpeakeasyBase {
    appId?: string;
    createTime?: string;
    displayName?: string;
    hostUrl?: string;
    name?: string;
    peeredNetwork?: string;
    secrets?: GitHubEnterpriseSecrets;
    sslCa?: string;
    webhookKey?: string;
}
/**
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
export declare class GitHubEnterpriseConfigInput extends SpeakeasyBase {
    appId?: string;
    displayName?: string;
    hostUrl?: string;
    name?: string;
    peeredNetwork?: string;
    secrets?: GitHubEnterpriseSecrets;
    sslCa?: string;
    webhookKey?: string;
}
