import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";



// ListPhotosResponse
/** 
 * Response to list all photos that belong to a user.
**/
export class ListPhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo })
  photos?: Photo[];
}
