import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
import { GoogleCloudVisionV1p1beta1Word } from "./googlecloudvisionv1p1beta1word";
/**
 * Structural unit of text representing a number of words in certain order.
**/
export declare class GoogleCloudVisionV1p1beta1Paragraph extends SpeakeasyBase {
    boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
    confidence?: number;
    property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    words?: GoogleCloudVisionV1p1beta1Word[];
}
