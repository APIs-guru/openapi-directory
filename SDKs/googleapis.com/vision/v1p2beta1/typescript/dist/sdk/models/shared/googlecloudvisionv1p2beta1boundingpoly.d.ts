import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1NormalizedVertex } from "./googlecloudvisionv1p2beta1normalizedvertex";
import { GoogleCloudVisionV1p2beta1Vertex } from "./googlecloudvisionv1p2beta1vertex";
/**
 * A bounding polygon for the detected image annotation.
**/
export declare class GoogleCloudVisionV1p2beta1BoundingPoly extends SpeakeasyBase {
    normalizedVertices?: GoogleCloudVisionV1p2beta1NormalizedVertex[];
    vertices?: GoogleCloudVisionV1p2beta1Vertex[];
}
