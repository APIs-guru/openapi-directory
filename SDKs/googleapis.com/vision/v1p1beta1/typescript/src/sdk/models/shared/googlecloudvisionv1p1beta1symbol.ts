import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";


// GoogleCloudVisionV1p1beta1Symbol
/** 
 * A single symbol representation.
**/
export class GoogleCloudVisionV1p1beta1Symbol extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
