import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// DeleteContactPhotoResponse
/** 
 * The response for deleting a contact's photo.
**/
export class DeleteContactPhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;
}
