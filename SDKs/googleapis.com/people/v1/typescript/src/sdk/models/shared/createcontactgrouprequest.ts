import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupInput } from "./contactgroup";



// CreateContactGroupRequestInput
/** 
 * A request to create a new contact group.
**/
export class CreateContactGroupRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroup" })
  contactGroup?: ContactGroupInput;

  @SpeakeasyMetadata({ data: "json, name=readGroupFields" })
  readGroupFields?: string;
}
