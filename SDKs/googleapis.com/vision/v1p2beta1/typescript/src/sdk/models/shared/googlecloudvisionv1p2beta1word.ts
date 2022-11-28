import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
import { GoogleCloudVisionV1p2beta1Symbol } from "./googlecloudvisionv1p2beta1symbol";



// GoogleCloudVisionV1p2beta1Word
/** 
 * A word representation.
**/
export class GoogleCloudVisionV1p2beta1Word extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

  @SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudVisionV1p2beta1Symbol })
  symbols?: GoogleCloudVisionV1p2beta1Symbol[];
}
