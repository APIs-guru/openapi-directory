import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityKey } from "./entitykey";
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
    name?: string;
    preferredMemberKey?: EntityKey;
    roles?: MembershipRole[];
    type?: MembershipTypeEnum;
    updateTime?: string;
}
