import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonInput } from "./person";



// ContactToCreateInput
/** 
 * A wrapper that contains the person data to populate a newly created source.
**/
export class ContactToCreateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactPerson" })
  contactPerson?: PersonInput;
}
