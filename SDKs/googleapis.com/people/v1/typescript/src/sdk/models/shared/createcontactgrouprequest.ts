import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactGroup } from "./contactgroup";


// CreateContactGroupRequest
/** 
 * A request to create a new contact group.
**/
export class CreateContactGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactGroup" })
  contactGroup?: ContactGroup;

  @Metadata({ data: "json, name=readGroupFields" })
  readGroupFields?: string;
}
