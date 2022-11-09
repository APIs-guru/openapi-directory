import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";


// ContactToCreate
/** 
 * A wrapper that contains the person data to populate a newly created source.
**/
export class ContactToCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactPerson" })
  contactPerson?: Person;
}
