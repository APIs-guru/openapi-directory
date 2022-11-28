import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";



// AnimationStatic
/** 
 * Display static overlay object.
**/
export class AnimationStatic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=xy" })
  xy?: NormalizedCoordinate;
}
