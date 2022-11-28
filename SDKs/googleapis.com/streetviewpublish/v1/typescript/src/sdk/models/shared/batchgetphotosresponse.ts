import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhotoResponse } from "./photoresponse";



// BatchGetPhotosResponse
/** 
 * Response to batch get of Photos.
**/
export class BatchGetPhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: PhotoResponse })
  results?: PhotoResponse[];
}
