import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1Paragraph } from "./googlecloudvisionv1p2beta1paragraph";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";

export enum GoogleCloudVisionV1p2beta1BlockBlockTypeEnum {
    Unknown = "UNKNOWN"
,    Text = "TEXT"
,    Table = "TABLE"
,    Picture = "PICTURE"
,    Ruler = "RULER"
,    Barcode = "BARCODE"
}


// GoogleCloudVisionV1p2beta1Block
/** 
 * Logical element on the page.
**/
export class GoogleCloudVisionV1p2beta1Block extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockType" })
  blockType?: GoogleCloudVisionV1p2beta1BlockBlockTypeEnum;

  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=paragraphs", elemType: shared.GoogleCloudVisionV1p2beta1Paragraph })
  paragraphs?: GoogleCloudVisionV1p2beta1Paragraph[];

  @Metadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
}
