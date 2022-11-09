import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyContactGroupMembersRequest
/** 
 * A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or "myContacts" or "starred" system groups.
**/
export class ModifyContactGroupMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceNamesToAdd" })
  resourceNamesToAdd?: string[];

  @Metadata({ data: "json, name=resourceNamesToRemove" })
  resourceNamesToRemove?: string[];
}
