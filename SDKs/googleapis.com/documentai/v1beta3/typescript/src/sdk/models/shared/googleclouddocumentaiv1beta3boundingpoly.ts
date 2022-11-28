import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3NormalizedVertex } from "./googleclouddocumentaiv1beta3normalizedvertex";
import { GoogleCloudDocumentaiV1beta3Vertex } from "./googleclouddocumentaiv1beta3vertex";



// GoogleCloudDocumentaiV1beta3BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudDocumentaiV1beta3BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: GoogleCloudDocumentaiV1beta3NormalizedVertex })
  normalizedVertices?: GoogleCloudDocumentaiV1beta3NormalizedVertex[];

  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudDocumentaiV1beta3Vertex })
  vertices?: GoogleCloudDocumentaiV1beta3Vertex[];
}
