import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1NormalizedVertex } from "./googleclouddocumentaiv1normalizedvertex";
import { GoogleCloudDocumentaiV1Vertex } from "./googleclouddocumentaiv1vertex";



// GoogleCloudDocumentaiV1BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudDocumentaiV1BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: GoogleCloudDocumentaiV1NormalizedVertex })
  normalizedVertices?: GoogleCloudDocumentaiV1NormalizedVertex[];

  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudDocumentaiV1Vertex })
  vertices?: GoogleCloudDocumentaiV1Vertex[];
}
