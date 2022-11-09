import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactGroupMembership
/** 
 * A Google contact group membership.
**/
export class ContactGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactGroupId" })
  contactGroupId?: string;

  @Metadata({ data: "json, name=contactGroupResourceName" })
  contactGroupResourceName?: string;
}
