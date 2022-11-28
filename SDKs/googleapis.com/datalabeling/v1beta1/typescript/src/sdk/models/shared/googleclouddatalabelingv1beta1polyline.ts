import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Vertex } from "./googleclouddatalabelingv1beta1vertex";



// GoogleCloudDatalabelingV1beta1Polyline
/** 
 * A line with multiple line segments.
**/
export class GoogleCloudDatalabelingV1beta1Polyline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudDatalabelingV1beta1Vertex })
  vertices?: GoogleCloudDatalabelingV1beta1Vertex[];
}
