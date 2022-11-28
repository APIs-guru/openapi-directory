import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";



// CreateFootnoteRequest
/** 
 * Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
**/
export class CreateFootnoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;
}
