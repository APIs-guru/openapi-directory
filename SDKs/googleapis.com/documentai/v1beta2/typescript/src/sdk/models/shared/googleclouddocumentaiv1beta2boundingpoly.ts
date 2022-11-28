import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2NormalizedVertex } from "./googleclouddocumentaiv1beta2normalizedvertex";
import { GoogleCloudDocumentaiV1beta2Vertex } from "./googleclouddocumentaiv1beta2vertex";



// GoogleCloudDocumentaiV1beta2BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudDocumentaiV1beta2BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: GoogleCloudDocumentaiV1beta2NormalizedVertex })
  normalizedVertices?: GoogleCloudDocumentaiV1beta2NormalizedVertex[];

  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudDocumentaiV1beta2Vertex })
  vertices?: GoogleCloudDocumentaiV1beta2Vertex[];
}
