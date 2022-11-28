import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NormalizedCoordinate
/** 
 * 2D normalized coordinates. Default: `{0.0, 0.0}`
**/
export class NormalizedCoordinate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
