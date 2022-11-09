import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactGroupMembership } from "./contactgroupmembership";
import { DomainMembership } from "./domainmembership";
import { FieldMetadata } from "./fieldmetadata";


// Membership
/** 
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export class Membership extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactGroupMembership" })
  contactGroupMembership?: ContactGroupMembership;

  @Metadata({ data: "json, name=domainMembership" })
  domainMembership?: DomainMembership;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;
}
