import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactGroup } from "./contactgroup";
import { Status } from "./status";


// ContactGroupResponse
/** 
 * The response for a specific contact group.
**/
export class ContactGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactGroup" })
  contactGroup?: ContactGroup;

  @Metadata({ data: "json, name=requestedResourceName" })
  requestedResourceName?: string;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
