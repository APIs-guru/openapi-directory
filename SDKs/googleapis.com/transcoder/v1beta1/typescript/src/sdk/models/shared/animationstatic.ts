import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";


// AnimationStatic
/** 
 * Display static overlay object.
**/
export class AnimationStatic extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;

  @Metadata({ data: "json, name=xy" })
  xy?: NormalizedCoordinate;
}
