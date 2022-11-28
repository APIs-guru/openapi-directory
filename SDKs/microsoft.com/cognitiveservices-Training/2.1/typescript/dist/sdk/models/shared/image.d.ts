import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";
/**
 * Image model to be sent as JSON
**/
export declare class Image extends SpeakeasyBase {
    created?: Date;
    height?: number;
    id?: string;
    imageUri?: string;
    regions?: ImageRegion[];
    tags?: ImageTag[];
    thumbnailUri?: string;
    width?: number;
}
