import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
import { Size } from "./size";



// InsertInlineImageRequest
/** 
 * Inserts an InlineObject containing an image at the given location.
**/
export class InsertInlineImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=objectSize" })
  objectSize?: Size;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
