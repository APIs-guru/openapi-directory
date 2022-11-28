import { SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerRepositoryId } from "./bitbucketserverrepositoryid";
import { BitbucketServerSecrets } from "./bitbucketserversecrets";
/**
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
export declare class BitbucketServerConfig extends SpeakeasyBase {
    apiKey?: string;
    connectedRepositories?: BitbucketServerRepositoryId[];
    createTime?: string;
    hostUri?: string;
    name?: string;
    peeredNetwork?: string;
    secrets?: BitbucketServerSecrets;
    sslCa?: string;
    username?: string;
    webhookKey?: string;
}
/**
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
export declare class BitbucketServerConfigInput extends SpeakeasyBase {
    apiKey?: string;
    createTime?: string;
    hostUri?: string;
    name?: string;
    peeredNetwork?: string;
    secrets?: BitbucketServerSecrets;
    sslCa?: string;
    username?: string;
}
