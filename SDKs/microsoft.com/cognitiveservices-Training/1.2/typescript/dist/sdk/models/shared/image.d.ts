import { SpeakeasyBase } from "../../../internal/utils";
import { PredictionTag } from "./predictiontag";
import { ImageTag } from "./imagetag";
/**
 * Image model to be sent as JSON
**/
export declare class Image extends SpeakeasyBase {
    created?: Date;
    height?: number;
    id?: string;
    imageUri?: string;
    predictions?: PredictionTag[];
    tags?: ImageTag[];
    thumbnailUri?: string;
    width?: number;
}
