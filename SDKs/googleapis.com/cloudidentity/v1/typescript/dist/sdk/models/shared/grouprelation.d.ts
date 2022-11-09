import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";
export declare enum GroupRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Direct = "DIRECT",
    Indirect = "INDIRECT",
    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}
/**
 * Message representing a transitive group of a user or a group.
**/
export declare class GroupRelation extends SpeakeasyBase {
    displayName?: string;
    group?: string;
    groupKey?: EntityKey;
    labels?: Map<string, string>;
    relationType?: GroupRelationRelationTypeEnum;
    roles?: TransitiveMembershipRole[];
}
