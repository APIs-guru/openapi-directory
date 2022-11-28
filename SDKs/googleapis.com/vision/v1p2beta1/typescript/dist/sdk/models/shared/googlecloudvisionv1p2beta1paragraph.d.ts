import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
import { GoogleCloudVisionV1p2beta1Word } from "./googlecloudvisionv1p2beta1word";
/**
 * Structural unit of text representing a number of words in certain order.
**/
export declare class GoogleCloudVisionV1p2beta1Paragraph extends SpeakeasyBase {
    boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
    confidence?: number;
    property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    words?: GoogleCloudVisionV1p2beta1Word[];
}
