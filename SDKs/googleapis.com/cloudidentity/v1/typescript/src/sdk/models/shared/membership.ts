import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { MembershipRole1 } from "./membershiprole1";
import { MembershipRole } from "./membershiprole";


export enum MembershipTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    User = "USER",
    ServiceAccount = "SERVICE_ACCOUNT",
    Group = "GROUP",
    SharedDrive = "SHARED_DRIVE",
    Other = "OTHER"
}


// MembershipInput
/** 
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
export class MembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preferredMemberKey" })
  preferredMemberKey?: EntityKey;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: MembershipRole1 })
  roles?: MembershipRole1[];
}


// Membership
/** 
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
export class Membership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredMemberKey" })
  preferredMemberKey?: EntityKey;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: MembershipRole })
  roles?: MembershipRole[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MembershipTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
