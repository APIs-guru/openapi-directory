import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1LocationInfo } from "./googlecloudvisionv1p2beta1locationinfo";
import { GoogleCloudVisionV1p2beta1Property } from "./googlecloudvisionv1p2beta1property";
/**
 * Set of detected entity features.
**/
export declare class GoogleCloudVisionV1p2beta1EntityAnnotation extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    confidence?: number;
    description?: string;
    locale?: string;
    locations?: GoogleCloudVisionV1p2beta1LocationInfo[];
    mid?: string;
    properties?: GoogleCloudVisionV1p2beta1Property[];
    score?: number;
    topicality?: number;
}
