import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";



// InsertTextRequest
/** 
 * Inserts text at the specified location.
**/
export class InsertTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
