import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1NormalizedVertex } from "./googlecloudvisionv1p1beta1normalizedvertex";
import { GoogleCloudVisionV1p1beta1Vertex } from "./googlecloudvisionv1p1beta1vertex";
/**
 * A bounding polygon for the detected image annotation.
**/
export declare class GoogleCloudVisionV1p1beta1BoundingPoly extends SpeakeasyBase {
    normalizedVertices?: GoogleCloudVisionV1p1beta1NormalizedVertex[];
    vertices?: GoogleCloudVisionV1p1beta1Vertex[];
}
