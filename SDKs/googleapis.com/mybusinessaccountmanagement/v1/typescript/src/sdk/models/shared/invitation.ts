import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";

export enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED"
,    PrimaryOwner = "PRIMARY_OWNER"
,    Owner = "OWNER"
,    Manager = "MANAGER"
,    SiteManager = "SITE_MANAGER"
}

export enum InvitationTargetTypeEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED"
,    AccountsOnly = "ACCOUNTS_ONLY"
,    LocationsOnly = "LOCATIONS_ONLY"
}


// Invitation
/** 
 * Represents a pending invitation.
**/
export class Invitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: InvitationRoleEnum;

  @Metadata({ data: "json, name=targetAccount" })
  targetAccount?: Account;

  @Metadata({ data: "json, name=targetLocation" })
  targetLocation?: TargetLocation;

  @Metadata({ data: "json, name=targetType" })
  targetType?: InvitationTargetTypeEnum;
}
