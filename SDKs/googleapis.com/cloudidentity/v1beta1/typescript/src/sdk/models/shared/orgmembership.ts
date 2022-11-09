import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrgMembershipTypeEnum {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED"
,    SharedDrive = "SHARED_DRIVE"
}


// OrgMembership
/** 
 * A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".
**/
export class OrgMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: string;

  @Metadata({ data: "json, name=memberUri" })
  memberUri?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: OrgMembershipTypeEnum;
}
