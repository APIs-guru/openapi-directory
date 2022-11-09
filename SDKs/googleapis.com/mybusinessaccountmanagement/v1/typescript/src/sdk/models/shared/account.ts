import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationInfo } from "./organizationinfo";

export enum AccountPermissionLevelEnum {
    PermissionLevelUnspecified = "PERMISSION_LEVEL_UNSPECIFIED"
,    OwnerLevel = "OWNER_LEVEL"
,    MemberLevel = "MEMBER_LEVEL"
}

export enum AccountRoleEnum {
    AccountRoleUnspecified = "ACCOUNT_ROLE_UNSPECIFIED"
,    PrimaryOwner = "PRIMARY_OWNER"
,    Owner = "OWNER"
,    Manager = "MANAGER"
,    SiteManager = "SITE_MANAGER"
}

export enum AccountTypeEnum {
    AccountTypeUnspecified = "ACCOUNT_TYPE_UNSPECIFIED"
,    Personal = "PERSONAL"
,    LocationGroup = "LOCATION_GROUP"
,    UserGroup = "USER_GROUP"
,    Organization = "ORGANIZATION"
}

export enum AccountVerificationStateEnum {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED"
,    Verified = "VERIFIED"
,    Unverified = "UNVERIFIED"
,    VerificationRequested = "VERIFICATION_REQUESTED"
}

export enum AccountVettedStateEnum {
    VettedStateUnspecified = "VETTED_STATE_UNSPECIFIED"
,    NotVetted = "NOT_VETTED"
,    Vetted = "VETTED"
,    Invalid = "INVALID"
}


// Account
/** 
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
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

  @Metadata({ data: "json, name=primaryOwner" })
  primaryOwner?: string;

  @Metadata({ data: "json, name=role" })
  role?: AccountRoleEnum;

  @Metadata({ data: "json, name=type" })
  type?: AccountTypeEnum;

  @Metadata({ data: "json, name=verificationState" })
  verificationState?: AccountVerificationStateEnum;

  @Metadata({ data: "json, name=vettedState" })
  vettedState?: AccountVettedStateEnum;
}
