import { SpeakeasyBase } from "../../../internal/utils";
import { AccountUserProfile } from "./accountuserprofile";
/**
 * Account User Profile List Response
**/
export declare class AccountUserProfilesListResponse extends SpeakeasyBase {
    accountUserProfiles?: AccountUserProfile[];
    kind?: string;
    nextPageToken?: string;
}
