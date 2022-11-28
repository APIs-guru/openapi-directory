import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1LocationInfo } from "./googlecloudvisionv1p1beta1locationinfo";
import { GoogleCloudVisionV1p1beta1Property } from "./googlecloudvisionv1p1beta1property";
/**
 * Set of detected entity features.
**/
export declare class GoogleCloudVisionV1p1beta1EntityAnnotation extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
    confidence?: number;
    description?: string;
    locale?: string;
    locations?: GoogleCloudVisionV1p1beta1LocationInfo[];
    mid?: string;
    properties?: GoogleCloudVisionV1p1beta1Property[];
    score?: number;
    topicality?: number;
}
