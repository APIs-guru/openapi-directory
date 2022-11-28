import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhotoResponse } from "./photoresponse";



// BatchUpdatePhotosResponse
/** 
 * Response to batch update of metadata of one or more Photos.
**/
export class BatchUpdatePhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: PhotoResponse })
  results?: PhotoResponse[];
}
