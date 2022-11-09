import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";


// DeleteContactPhotoResponse
/** 
 * The response for deleting a contact's photo.
**/
export class DeleteContactPhotoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: Person;
}
