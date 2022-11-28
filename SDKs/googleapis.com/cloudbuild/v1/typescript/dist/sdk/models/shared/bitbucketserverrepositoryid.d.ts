import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
**/
export declare class BitbucketServerRepositoryId extends SpeakeasyBase {
    projectKey?: string;
    repoSlug?: string;
    webhookId?: number;
}
/**
 * BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
**/
export declare class BitbucketServerRepositoryIdInput extends SpeakeasyBase {
    projectKey?: string;
    repoSlug?: string;
}
