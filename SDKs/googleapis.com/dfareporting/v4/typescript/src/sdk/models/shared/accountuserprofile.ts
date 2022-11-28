import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectFilter } from "./objectfilter";


export enum AccountUserProfileTraffickerTypeEnum {
    InternalNonTrafficker = "INTERNAL_NON_TRAFFICKER",
    InternalTrafficker = "INTERNAL_TRAFFICKER",
    ExternalTrafficker = "EXTERNAL_TRAFFICKER"
}

export enum AccountUserProfileUserAccessTypeEnum {
    NormalUser = "NORMAL_USER",
    SuperUser = "SUPER_USER",
    InternalAdministrator = "INTERNAL_ADMINISTRATOR",
    ReadOnlySuperUser = "READ_ONLY_SUPER_USER"
}


// AccountUserProfile
/** 
 * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
**/
export class AccountUserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserFilter" })
  advertiserFilter?: ObjectFilter;

  @SpeakeasyMetadata({ data: "json, name=campaignFilter" })
  campaignFilter?: ObjectFilter;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=siteFilter" })
  siteFilter?: ObjectFilter;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=traffickerType" })
  traffickerType?: AccountUserProfileTraffickerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userAccessType" })
  userAccessType?: AccountUserProfileUserAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userRoleFilter" })
  userRoleFilter?: ObjectFilter;

  @SpeakeasyMetadata({ data: "json, name=userRoleId" })
  userRoleId?: string;
}
