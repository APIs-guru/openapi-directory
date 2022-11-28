import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { TargetLocation } from "./targetlocation";


export enum InvitationRoleEnum {
    AdminRoleUnspecified = "ADMIN_ROLE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    Owner = "OWNER",
    Manager = "MANAGER",
    SiteManager = "SITE_MANAGER"
}

export enum InvitationTargetTypeEnum {
    TargetTypeUnspecified = "TARGET_TYPE_UNSPECIFIED",
    AccountsOnly = "ACCOUNTS_ONLY",
    LocationsOnly = "LOCATIONS_ONLY"
}


// Invitation
/** 
 * Represents a pending invitation.
**/
export class Invitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: InvitationRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=targetAccount" })
  targetAccount?: Account;

  @SpeakeasyMetadata({ data: "json, name=targetLocation" })
  targetLocation?: TargetLocation;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: InvitationTargetTypeEnum;
}
