import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeletePhotosRequest
/** 
 * Request to delete multiple Photos.
**/
export class BatchDeletePhotosRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=photoIds" })
  photoIds?: string[];
}
