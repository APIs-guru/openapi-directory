import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.
**/
export declare class UserProfile extends SpeakeasyBase {
    accountId?: string;
    accountName?: string;
    etag?: string;
    kind?: string;
    profileId?: string;
    subAccountId?: string;
    subAccountName?: string;
    userName?: string;
}
