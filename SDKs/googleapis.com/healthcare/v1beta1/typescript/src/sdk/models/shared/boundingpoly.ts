import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Vertex } from "./vertex";


// BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class BoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=vertices", elemType: shared.Vertex })
  vertices?: Vertex[];
}
