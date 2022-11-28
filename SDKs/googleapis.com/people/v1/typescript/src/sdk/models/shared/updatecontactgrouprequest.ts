import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupInput } from "./contactgroup";



// UpdateContactGroupRequestInput
/** 
 * A request to update an existing user contact group. All updated fields will be replaced.
**/
export class UpdateContactGroupRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroup" })
  contactGroup?: ContactGroupInput;

  @SpeakeasyMetadata({ data: "json, name=readGroupFields" })
  readGroupFields?: string;

  @SpeakeasyMetadata({ data: "json, name=updateGroupFields" })
  updateGroupFields?: string;
}
