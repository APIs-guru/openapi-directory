import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
/**
 * Single crop hint that is used to generate a new crop when serving an image.
**/
export declare class GoogleCloudVisionV1p2beta1CropHint extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    confidence?: number;
    importanceFraction?: number;
}
