import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1NormalizedVertex } from "./googleclouddocumentaiv1normalizedvertex";
import { GoogleCloudDocumentaiV1Vertex } from "./googleclouddocumentaiv1vertex";


// GoogleCloudDocumentaiV1BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudDocumentaiV1BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.GoogleCloudDocumentaiV1NormalizedVertex })
  normalizedVertices?: GoogleCloudDocumentaiV1NormalizedVertex[];

  @Metadata({ data: "json, name=vertices", elemType: shared.GoogleCloudDocumentaiV1Vertex })
  vertices?: GoogleCloudDocumentaiV1Vertex[];
}
