import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";



// GoogleCloudVisionV1p1beta1Symbol
/** 
 * A single symbol representation.
**/
export class GoogleCloudVisionV1p1beta1Symbol extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
