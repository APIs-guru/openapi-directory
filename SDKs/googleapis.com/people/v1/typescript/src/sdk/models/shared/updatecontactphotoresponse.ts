import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";


// UpdateContactPhotoResponse
/** 
 * The response for updating a contact's photo.
**/
export class UpdateContactPhotoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: Person;
}
