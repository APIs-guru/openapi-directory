import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRegionCreateEntry } from "./imageregioncreateentry";
/**
 * Batch of image region information to create.
**/
export declare class ImageRegionCreateBatch extends SpeakeasyBase {
    regions?: ImageRegionCreateEntry[];
}
