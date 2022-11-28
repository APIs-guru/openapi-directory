import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupMembershipInput } from "./contactgroupmembership";
import { DomainMembership } from "./domainmembership";
import { FieldMetadataInput } from "./fieldmetadata";
import { ContactGroupMembership } from "./contactgroupmembership";
import { FieldMetadata } from "./fieldmetadata";



// MembershipInput
/** 
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export class MembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroupMembership" })
  contactGroupMembership?: ContactGroupMembershipInput;

  @SpeakeasyMetadata({ data: "json, name=domainMembership" })
  domainMembership?: DomainMembership;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;
}


// Membership
/** 
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export class Membership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroupMembership" })
  contactGroupMembership?: ContactGroupMembership;

  @SpeakeasyMetadata({ data: "json, name=domainMembership" })
  domainMembership?: DomainMembership;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;
}
