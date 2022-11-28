import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vertex } from "./vertex";



// BoundingPoly
/** 
 * A bounding polygon for the detected image annotation.
**/
export class BoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=vertices", elemType: Vertex })
  vertices?: Vertex[];
}
