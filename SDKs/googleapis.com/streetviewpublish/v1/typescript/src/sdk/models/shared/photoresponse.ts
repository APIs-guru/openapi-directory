import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { Status } from "./status";



// PhotoResponse
/** 
 * Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
**/
export class PhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: Photo;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
