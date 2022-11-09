import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1NormalizedVertex } from "./googlecloudvisionv1p2beta1normalizedvertex";
import { GoogleCloudVisionV1p2beta1Vertex } from "./googlecloudvisionv1p2beta1vertex";


// GoogleCloudVisionV1p2beta1BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudVisionV1p2beta1BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.GoogleCloudVisionV1p2beta1NormalizedVertex })
  normalizedVertices?: GoogleCloudVisionV1p2beta1NormalizedVertex[];

  @Metadata({ data: "json, name=vertices", elemType: shared.GoogleCloudVisionV1p2beta1Vertex })
  vertices?: GoogleCloudVisionV1p2beta1Vertex[];
}
