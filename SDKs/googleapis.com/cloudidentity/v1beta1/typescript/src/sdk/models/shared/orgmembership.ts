import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OrgMembershipTypeEnum {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    SharedDrive = "SHARED_DRIVE"
}


// OrgMembership
/** 
 * A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".
**/
export class OrgMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: string;

  @SpeakeasyMetadata({ data: "json, name=memberUri" })
  memberUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrgMembershipTypeEnum;
}
