import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1NormalizedVertex } from "./googleclouddocumentaiv1normalizedvertex";
import { GoogleCloudDocumentaiV1Vertex } from "./googleclouddocumentaiv1vertex";
/**
 * A bounding polygon for the detected image annotation.
**/
export declare class GoogleCloudDocumentaiV1BoundingPoly extends SpeakeasyBase {
    normalizedVertices?: GoogleCloudDocumentaiV1NormalizedVertex[];
    vertices?: GoogleCloudDocumentaiV1Vertex[];
}
