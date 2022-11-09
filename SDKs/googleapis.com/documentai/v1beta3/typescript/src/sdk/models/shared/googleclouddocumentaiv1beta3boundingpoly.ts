import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3NormalizedVertex } from "./googleclouddocumentaiv1beta3normalizedvertex";
import { GoogleCloudDocumentaiV1beta3Vertex } from "./googleclouddocumentaiv1beta3vertex";


// GoogleCloudDocumentaiV1beta3BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudDocumentaiV1beta3BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.GoogleCloudDocumentaiV1beta3NormalizedVertex })
  normalizedVertices?: GoogleCloudDocumentaiV1beta3NormalizedVertex[];

  @Metadata({ data: "json, name=vertices", elemType: shared.GoogleCloudDocumentaiV1beta3Vertex })
  vertices?: GoogleCloudDocumentaiV1beta3Vertex[];
}
