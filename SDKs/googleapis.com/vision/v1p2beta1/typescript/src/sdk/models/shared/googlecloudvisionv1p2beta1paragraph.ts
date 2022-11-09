import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
import { GoogleCloudVisionV1p2beta1Word } from "./googlecloudvisionv1p2beta1word";


// GoogleCloudVisionV1p2beta1Paragraph
/** 
 * Structural unit of text representing a number of words in certain order.
**/
export class GoogleCloudVisionV1p2beta1Paragraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

  @Metadata({ data: "json, name=words", elemType: shared.GoogleCloudVisionV1p2beta1Word })
  words?: GoogleCloudVisionV1p2beta1Word[];
}
