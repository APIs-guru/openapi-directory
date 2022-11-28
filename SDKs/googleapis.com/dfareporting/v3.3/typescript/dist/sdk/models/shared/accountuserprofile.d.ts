import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectFilter } from "./objectfilter";
export declare enum AccountUserProfileTraffickerTypeEnum {
    InternalNonTrafficker = "INTERNAL_NON_TRAFFICKER",
    InternalTrafficker = "INTERNAL_TRAFFICKER",
    ExternalTrafficker = "EXTERNAL_TRAFFICKER"
}
export declare enum AccountUserProfileUserAccessTypeEnum {
    NormalUser = "NORMAL_USER",
    SuperUser = "SUPER_USER",
    InternalAdministrator = "INTERNAL_ADMINISTRATOR",
    ReadOnlySuperUser = "READ_ONLY_SUPER_USER"
}
/**
 * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
**/
export declare class AccountUserProfile extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    advertiserFilter?: ObjectFilter;
    campaignFilter?: ObjectFilter;
    comments?: string;
    email?: string;
    id?: string;
    kind?: string;
    locale?: string;
    name?: string;
    siteFilter?: ObjectFilter;
    subaccountId?: string;
    traffickerType?: AccountUserProfileTraffickerTypeEnum;
    userAccessType?: AccountUserProfileUserAccessTypeEnum;
    userRoleFilter?: ObjectFilter;
    userRoleId?: string;
}
