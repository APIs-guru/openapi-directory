import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or "myContacts" or "starred" system groups.
**/
export declare class ModifyContactGroupMembersRequest extends SpeakeasyBase {
    resourceNamesToAdd?: string[];
    resourceNamesToRemove?: string[];
}
