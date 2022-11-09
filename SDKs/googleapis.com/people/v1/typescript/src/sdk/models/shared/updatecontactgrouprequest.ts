import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactGroup } from "./contactgroup";


// UpdateContactGroupRequest
/** 
 * A request to update an existing user contact group. All updated fields will be replaced.
**/
export class UpdateContactGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactGroup" })
  contactGroup?: ContactGroup;

  @Metadata({ data: "json, name=readGroupFields" })
  readGroupFields?: string;

  @Metadata({ data: "json, name=updateGroupFields" })
  updateGroupFields?: string;
}
