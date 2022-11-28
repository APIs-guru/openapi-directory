import { SpeakeasyBase } from "../../../internal/utils";
import { Vertex } from "./vertex";
/**
 * A bounding polygon for the detected image annotation.
**/
export declare class BoundingPoly extends SpeakeasyBase {
    label?: string;
    vertices?: Vertex[];
}
