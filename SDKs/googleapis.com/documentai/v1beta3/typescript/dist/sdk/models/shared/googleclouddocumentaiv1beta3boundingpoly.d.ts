import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3NormalizedVertex } from "./googleclouddocumentaiv1beta3normalizedvertex";
import { GoogleCloudDocumentaiV1beta3Vertex } from "./googleclouddocumentaiv1beta3vertex";
/**
 * A bounding polygon for the detected image annotation.
**/
export declare class GoogleCloudDocumentaiV1beta3BoundingPoly extends SpeakeasyBase {
    normalizedVertices?: GoogleCloudDocumentaiV1beta3NormalizedVertex[];
    vertices?: GoogleCloudDocumentaiV1beta3Vertex[];
}
