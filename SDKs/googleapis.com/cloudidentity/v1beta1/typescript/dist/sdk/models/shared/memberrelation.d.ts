import { SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";
export declare enum MemberRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Direct = "DIRECT",
    Indirect = "INDIRECT",
    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}
/**
 * Message representing a transitive membership of a group.
**/
export declare class MemberRelation extends SpeakeasyBase {
    member?: string;
    preferredMemberKey?: EntityKey[];
    relationType?: MemberRelationRelationTypeEnum;
    roles?: TransitiveMembershipRole[];
}
