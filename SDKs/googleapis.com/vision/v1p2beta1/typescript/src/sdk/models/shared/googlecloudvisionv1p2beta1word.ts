import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";
import { GoogleCloudVisionV1p2beta1Symbol } from "./googlecloudvisionv1p2beta1symbol";


// GoogleCloudVisionV1p2beta1Word
/** 
 * A word representation.
**/
export class GoogleCloudVisionV1p2beta1Word extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

  @Metadata({ data: "json, name=symbols", elemType: shared.GoogleCloudVisionV1p2beta1Symbol })
  symbols?: GoogleCloudVisionV1p2beta1Symbol[];
}
