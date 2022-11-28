import { SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { MembershipRole1 } from "./membershiprole1";
import { MembershipRole } from "./membershiprole";
export declare enum MembershipTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    User = "USER",
    ServiceAccount = "SERVICE_ACCOUNT",
    Group = "GROUP",
    SharedDrive = "SHARED_DRIVE",
    Other = "OTHER"
}
/**
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
export declare class Membership extends SpeakeasyBase {
    createTime?: string;
    memberKey?: EntityKey;
    name?: string;
    preferredMemberKey?: EntityKey;
    roles?: MembershipRole1[];
    type?: MembershipTypeEnum;
    updateTime?: string;
}
/**
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
export declare class MembershipInput extends SpeakeasyBase {
    memberKey?: EntityKey;
    preferredMemberKey?: EntityKey;
    roles?: MembershipRole[];
}
