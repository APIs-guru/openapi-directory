import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";

export enum MemberRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED"
,    Direct = "DIRECT"
,    Indirect = "INDIRECT"
,    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}


// MemberRelation
/** 
 * Message representing a transitive membership of a group.
**/
export class MemberRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: string;

  @Metadata({ data: "json, name=preferredMemberKey", elemType: shared.EntityKey })
  preferredMemberKey?: EntityKey[];

  @Metadata({ data: "json, name=relationType" })
  relationType?: MemberRelationRelationTypeEnum;

  @Metadata({ data: "json, name=roles", elemType: shared.TransitiveMembershipRole })
  roles?: TransitiveMembershipRole[];
}
