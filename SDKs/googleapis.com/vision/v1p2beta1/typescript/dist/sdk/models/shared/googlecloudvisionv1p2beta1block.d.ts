import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1Paragraph } from "./googlecloudvisionv1p2beta1paragraph";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
export declare enum GoogleCloudVisionV1p2beta1BlockBlockTypeEnum {
    Unknown = "UNKNOWN",
    Text = "TEXT",
    Table = "TABLE",
    Picture = "PICTURE",
    Ruler = "RULER",
    Barcode = "BARCODE"
}
/**
 * Logical element on the page.
**/
export declare class GoogleCloudVisionV1p2beta1Block extends SpeakeasyBase {
    blockType?: GoogleCloudVisionV1p2beta1BlockBlockTypeEnum;
    boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
    confidence?: number;
    paragraphs?: GoogleCloudVisionV1p2beta1Paragraph[];
    property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
}
