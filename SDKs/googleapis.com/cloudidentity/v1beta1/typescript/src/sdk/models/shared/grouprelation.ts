import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";


export enum GroupRelationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Direct = "DIRECT",
    Indirect = "INDIRECT",
    DirectAndIndirect = "DIRECT_AND_INDIRECT"
}


// GroupRelation
/** 
 * Message representing a transitive group of a user or a group.
**/
export class GroupRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=groupKey" })
  groupKey?: EntityKey;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=relationType" })
  relationType?: GroupRelationRelationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: TransitiveMembershipRole })
  roles?: TransitiveMembershipRole[];
}
