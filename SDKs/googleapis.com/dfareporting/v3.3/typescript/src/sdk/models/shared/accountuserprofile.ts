import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectFilter } from "./objectfilter";
import { ObjectFilter } from "./objectfilter";
import { ObjectFilter } from "./objectfilter";
import { ObjectFilter } from "./objectfilter";

export enum AccountUserProfileTraffickerTypeEnum {
    InternalNonTrafficker = "INTERNAL_NON_TRAFFICKER"
,    InternalTrafficker = "INTERNAL_TRAFFICKER"
,    ExternalTrafficker = "EXTERNAL_TRAFFICKER"
}

export enum AccountUserProfileUserAccessTypeEnum {
    NormalUser = "NORMAL_USER"
,    SuperUser = "SUPER_USER"
,    InternalAdministrator = "INTERNAL_ADMINISTRATOR"
,    ReadOnlySuperUser = "READ_ONLY_SUPER_USER"
}


// AccountUserProfile
/** 
 * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
**/
export class AccountUserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=advertiserFilter" })
  advertiserFilter?: ObjectFilter;

  @Metadata({ data: "json, name=campaignFilter" })
  campaignFilter?: ObjectFilter;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=siteFilter" })
  siteFilter?: ObjectFilter;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=traffickerType" })
  traffickerType?: AccountUserProfileTraffickerTypeEnum;

  @Metadata({ data: "json, name=userAccessType" })
  userAccessType?: AccountUserProfileUserAccessTypeEnum;

  @Metadata({ data: "json, name=userRoleFilter" })
  userRoleFilter?: ObjectFilter;

  @Metadata({ data: "json, name=userRoleId" })
  userRoleId?: string;
}
