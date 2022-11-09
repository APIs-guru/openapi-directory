import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
import { Size } from "./size";


// InsertInlineImageRequest
/** 
 * Inserts an InlineObject containing an image at the given location.
**/
export class InsertInlineImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=objectSize" })
  objectSize?: Size;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
