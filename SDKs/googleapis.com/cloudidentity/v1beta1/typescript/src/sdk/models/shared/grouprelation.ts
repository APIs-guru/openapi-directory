import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";

export enum GroupRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED"
,    Direct = "DIRECT"
,    Indirect = "INDIRECT"
,    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}


// GroupRelation
/** 
 * Message representing a transitive group of a user or a group.
**/
export class GroupRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=groupKey" })
  groupKey?: EntityKey;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=relationType" })
  relationType?: GroupRelationRelationTypeEnum;

  @Metadata({ data: "json, name=roles", elemType: shared.TransitiveMembershipRole })
  roles?: TransitiveMembershipRole[];
}
