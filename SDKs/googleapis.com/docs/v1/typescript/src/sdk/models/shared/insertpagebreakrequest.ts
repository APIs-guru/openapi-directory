import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";


// InsertPageBreakRequest
/** 
 * Inserts a page break followed by a newline at the specified location.
**/
export class InsertPageBreakRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @Metadata({ data: "json, name=location" })
  location?: Location;
}
