import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Vertex } from "./googleclouddatalabelingv1beta1vertex";


// GoogleCloudDatalabelingV1beta1BoundingPoly
/** 
 * A bounding polygon in the image.
**/
export class GoogleCloudDatalabelingV1beta1BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=vertices", elemType: shared.GoogleCloudDatalabelingV1beta1Vertex })
  vertices?: GoogleCloudDatalabelingV1beta1Vertex[];
}
