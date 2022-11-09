import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NormalizedCoordinate
/** 
 * 2D normalized coordinates. Default: `{0.0, 0.0}`
**/
export class NormalizedCoordinate extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}
