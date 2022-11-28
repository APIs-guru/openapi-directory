import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrgMembershipTypeEnum {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    SharedDrive = "SHARED_DRIVE"
}
/**
 * A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".
**/
export declare class OrgMembership extends SpeakeasyBase {
    member?: string;
    memberUri?: string;
    name?: string;
    type?: OrgMembershipTypeEnum;
}
