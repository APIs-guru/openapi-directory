import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";



// Image
/** 
 * Overlaid jpeg image.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpha" })
  alpha?: number;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: NormalizedCoordinate;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
