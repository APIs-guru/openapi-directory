import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceDirectoryConfig } from "./servicedirectoryconfig";
/**
 * GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration.
**/
export declare class GitLabEnterpriseConfig extends SpeakeasyBase {
    hostUri?: string;
    serviceDirectoryConfig?: ServiceDirectoryConfig;
    sslCa?: string;
}
