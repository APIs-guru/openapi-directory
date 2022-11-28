import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactGroup } from "./contactgroup";
import { Status } from "./status";



// ContactGroupResponse
/** 
 * The response for a specific contact group.
**/
export class ContactGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroup" })
  contactGroup?: ContactGroup;

  @SpeakeasyMetadata({ data: "json, name=requestedResourceName" })
  requestedResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
