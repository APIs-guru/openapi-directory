import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
/**
 * A single symbol representation.
**/
export declare class GoogleCloudVisionV1p1beta1Symbol extends SpeakeasyBase {
    boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
    confidence?: number;
    property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    text?: string;
}
