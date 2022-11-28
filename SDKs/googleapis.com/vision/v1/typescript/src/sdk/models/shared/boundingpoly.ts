import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NormalizedVertex } from "./normalizedvertex";
import { Vertex } from "./vertex";



// BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: NormalizedVertex })
  normalizedVertices?: NormalizedVertex[];

  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: Vertex })
  vertices?: Vertex[];
}
