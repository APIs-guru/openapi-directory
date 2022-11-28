import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1Paragraph } from "./googlecloudvisionv1p1beta1paragraph";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";


export enum GoogleCloudVisionV1p1beta1BlockBlockTypeEnum {
    Unknown = "UNKNOWN",
    Text = "TEXT",
    Table = "TABLE",
    Picture = "PICTURE",
    Ruler = "RULER",
    Barcode = "BARCODE"
}


// GoogleCloudVisionV1p1beta1Block
/** 
 * Logical element on the page.
**/
export class GoogleCloudVisionV1p1beta1Block extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockType" })
  blockType?: GoogleCloudVisionV1p1beta1BlockBlockTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudVisionV1p1beta1Paragraph })
  paragraphs?: GoogleCloudVisionV1p1beta1Paragraph[];

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
}
