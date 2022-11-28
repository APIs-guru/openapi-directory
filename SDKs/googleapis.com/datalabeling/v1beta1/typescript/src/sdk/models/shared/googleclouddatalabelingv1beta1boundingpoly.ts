import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Vertex } from "./googleclouddatalabelingv1beta1vertex";



// GoogleCloudDatalabelingV1beta1BoundingPoly
/** 
 * A bounding polygon in the image.
**/
export class GoogleCloudDatalabelingV1beta1BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudDatalabelingV1beta1Vertex })
  vertices?: GoogleCloudDatalabelingV1beta1Vertex[];
}
