import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// UpdateContactPhotoResponse
/** 
 * The response for updating a contact's photo.
**/
export class UpdateContactPhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;
}
