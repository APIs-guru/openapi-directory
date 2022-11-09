import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Photo } from "./photo";


// ListPhotosResponse
/** 
 * Response to list all photos that belong to a user.
**/
export class ListPhotosResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];
}
