import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2NormalizedVertex } from "./googleclouddocumentaiv1beta2normalizedvertex";
import { GoogleCloudDocumentaiV1beta2Vertex } from "./googleclouddocumentaiv1beta2vertex";


// GoogleCloudDocumentaiV1beta2BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class GoogleCloudDocumentaiV1beta2BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.GoogleCloudDocumentaiV1beta2NormalizedVertex })
  normalizedVertices?: GoogleCloudDocumentaiV1beta2NormalizedVertex[];

  @Metadata({ data: "json, name=vertices", elemType: shared.GoogleCloudDocumentaiV1beta2Vertex })
  vertices?: GoogleCloudDocumentaiV1beta2Vertex[];
}
