import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1NormalizedVertex } from "./googlecloudvisionv1p2beta1normalizedvertex";
import { GoogleCloudVisionV1p2beta1Vertex } from "./googlecloudvisionv1p2beta1vertex";



// GoogleCloudVisionV1p2beta1BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudVisionV1p2beta1BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: GoogleCloudVisionV1p2beta1NormalizedVertex })
  normalizedVertices?: GoogleCloudVisionV1p2beta1NormalizedVertex[];

  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudVisionV1p2beta1Vertex })
  vertices?: GoogleCloudVisionV1p2beta1Vertex[];
}
