import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
/**
 * Set of detected objects with bounding boxes.
**/
export declare class GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    languageCode?: string;
    mid?: string;
    name?: string;
    score?: number;
}
