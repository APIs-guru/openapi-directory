import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1NormalizedVertex } from "./googlecloudvisionv1p1beta1normalizedvertex";
import { GoogleCloudVisionV1p1beta1Vertex } from "./googlecloudvisionv1p1beta1vertex";


// GoogleCloudVisionV1p1beta1BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudVisionV1p1beta1BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.GoogleCloudVisionV1p1beta1NormalizedVertex })
  normalizedVertices?: GoogleCloudVisionV1p1beta1NormalizedVertex[];

  @Metadata({ data: "json, name=vertices", elemType: shared.GoogleCloudVisionV1p1beta1Vertex })
  vertices?: GoogleCloudVisionV1p1beta1Vertex[];
}
