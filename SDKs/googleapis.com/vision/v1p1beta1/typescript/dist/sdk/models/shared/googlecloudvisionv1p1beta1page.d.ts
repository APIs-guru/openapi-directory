import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Block } from "./googlecloudvisionv1p1beta1block";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
/**
 * Detected page from OCR.
**/
export declare class GoogleCloudVisionV1p1beta1Page extends SpeakeasyBase {
    blocks?: GoogleCloudVisionV1p1beta1Block[];
    confidence?: number;
    height?: number;
    property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    width?: number;
}
