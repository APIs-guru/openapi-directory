import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationInfo } from "./organizationinfo";
import { AccountState } from "./accountstate";

export enum AccountPermissionLevelEnum {
    PermissionLevelUnspecified = "PERMISSION_LEVEL_UNSPECIFIED"
,    OwnerLevel = "OWNER_LEVEL"
,    MemberLevel = "MEMBER_LEVEL"
}

export enum AccountRoleEnum {
    AccountRoleUnspecified = "ACCOUNT_ROLE_UNSPECIFIED"
,    Owner = "OWNER"
,    CoOwner = "CO_OWNER"
,    Manager = "MANAGER"
,    CommunityManager = "COMMUNITY_MANAGER"
}

export enum AccountTypeEnum {
    AccountTypeUnspecified = "ACCOUNT_TYPE_UNSPECIFIED"
,    Personal = "PERSONAL"
,    LocationGroup = "LOCATION_GROUP"
,    UserGroup = "USER_GROUP"
,    Organization = "ORGANIZATION"
}


// Account
/** 
 * An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationInfo" })
  organizationInfo?: OrganizationInfo;

  @Metadata({ data: "json, name=permissionLevel" })
  permissionLevel?: AccountPermissionLevelEnum;

  @Metadata({ data: "json, name=role" })
  role?: AccountRoleEnum;

  @Metadata({ data: "json, name=state" })
  state?: AccountState;

  @Metadata({ data: "json, name=type" })
  type?: AccountTypeEnum;
}
