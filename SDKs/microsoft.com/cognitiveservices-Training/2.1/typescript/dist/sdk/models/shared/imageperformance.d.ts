import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";
/**
 * Image performance model
**/
export declare class ImagePerformance extends SpeakeasyBase {
    created?: Date;
    height?: number;
    id?: string;
    imageUri?: string;
    predictions?: Prediction[];
    regions?: ImageRegion[];
    tags?: ImageTag[];
    thumbnailUri?: string;
    width?: number;
}
