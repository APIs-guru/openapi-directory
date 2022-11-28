import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageRegionCreateEntry } from "./imageregioncreateentry";



// ImageRegionCreateBatch
/** 
 * Batch of image region information to create.
**/
export class ImageRegionCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions", elemType: ImageRegionCreateEntry })
  regions?: ImageRegionCreateEntry[];
}
