import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityKey } from "./entitykey";
import { EntityKey } from "./entitykey";
import { MembershipRole } from "./membershiprole";

export enum MembershipTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    User = "USER"
,    ServiceAccount = "SERVICE_ACCOUNT"
,    Group = "GROUP"
,    SharedDrive = "SHARED_DRIVE"
,    Other = "OTHER"
}


// Membership
/** 
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
export class Membership extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=memberKey" })
  memberKey?: EntityKey;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=preferredMemberKey" })
  preferredMemberKey?: EntityKey;

  @Metadata({ data: "json, name=roles", elemType: shared.MembershipRole })
  roles?: MembershipRole[];

  @Metadata({ data: "json, name=type" })
  type?: MembershipTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
