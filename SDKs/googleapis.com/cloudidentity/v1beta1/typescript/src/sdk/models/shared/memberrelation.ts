import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";


export enum MemberRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Direct = "DIRECT",
    Indirect = "INDIRECT",
    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}


// MemberRelation
/** 
 * Message representing a transitive membership of a group.
**/
export class MemberRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredMemberKey", elemType: EntityKey })
  preferredMemberKey?: EntityKey[];

  @SpeakeasyMetadata({ data: "json, name=relationType" })
  relationType?: MemberRelationRelationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: TransitiveMembershipRole })
  roles?: TransitiveMembershipRole[];
}
