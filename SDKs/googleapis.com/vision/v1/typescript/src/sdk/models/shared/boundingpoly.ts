import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NormalizedVertex } from "./normalizedvertex";
import { Vertex } from "./vertex";


// BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.NormalizedVertex })
  normalizedVertices?: NormalizedVertex[];

  @Metadata({ data: "json, name=vertices", elemType: shared.Vertex })
  vertices?: Vertex[];
}
