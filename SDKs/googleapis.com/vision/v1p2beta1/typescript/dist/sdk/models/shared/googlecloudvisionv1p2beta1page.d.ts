import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Block } from "./googlecloudvisionv1p2beta1block";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
/**
 * Detected page from OCR.
**/
export declare class GoogleCloudVisionV1p2beta1Page extends SpeakeasyBase {
    blocks?: GoogleCloudVisionV1p2beta1Block[];
    confidence?: number;
    height?: number;
    property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    width?: number;
}
