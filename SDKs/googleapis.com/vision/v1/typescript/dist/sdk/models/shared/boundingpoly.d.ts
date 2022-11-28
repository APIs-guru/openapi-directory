import { SpeakeasyBase } from "../../../internal/utils";
import { NormalizedVertex } from "./normalizedvertex";
import { Vertex } from "./vertex";
/**
 * A bounding polygon for the detected image annotation.
**/
export declare class BoundingPoly extends SpeakeasyBase {
    normalizedVertices?: NormalizedVertex[];
    vertices?: Vertex[];
}
