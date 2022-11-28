import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
/**
 * A single symbol representation.
**/
export declare class GoogleCloudVisionV1p2beta1Symbol extends SpeakeasyBase {
    boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
    confidence?: number;
    property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    text?: string;
}
