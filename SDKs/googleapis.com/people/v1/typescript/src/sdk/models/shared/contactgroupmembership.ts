import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactGroupMembership
/** 
 * A Google contact group membership.
**/
export class ContactGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroupId" })
  contactGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=contactGroupResourceName" })
  contactGroupResourceName?: string;
}


// ContactGroupMembershipInput
/** 
 * A Google contact group membership.
**/
export class ContactGroupMembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroupResourceName" })
  contactGroupResourceName?: string;
}
