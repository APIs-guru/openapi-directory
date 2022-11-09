import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";


// Image
/** 
 * Overlaid jpeg image.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha" })
  alpha?: number;

  @Metadata({ data: "json, name=resolution" })
  resolution?: NormalizedCoordinate;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
