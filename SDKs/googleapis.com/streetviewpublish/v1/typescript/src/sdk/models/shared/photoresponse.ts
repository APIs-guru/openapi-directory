import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Photo } from "./photo";
import { Status } from "./status";


// PhotoResponse
/** 
 * Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
**/
export class PhotoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo" })
  photo?: Photo;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
