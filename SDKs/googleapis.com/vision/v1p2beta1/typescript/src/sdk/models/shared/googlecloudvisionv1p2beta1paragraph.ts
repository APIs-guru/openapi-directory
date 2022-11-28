import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
import { GoogleCloudVisionV1p2beta1Word } from "./googlecloudvisionv1p2beta1word";



// GoogleCloudVisionV1p2beta1Paragraph
/** 
 * Structural unit of text representing a number of words in certain order.
**/
export class GoogleCloudVisionV1p2beta1Paragraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

  @SpeakeasyMetadata({ data: "json, name=words", elemType: GoogleCloudVisionV1p2beta1Word })
  words?: GoogleCloudVisionV1p2beta1Word[];
}
