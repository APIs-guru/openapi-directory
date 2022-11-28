import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeletePhotosRequest
/** 
 * Request to delete multiple Photos.
**/
export class BatchDeletePhotosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photoIds" })
  photoIds?: string[];
}
