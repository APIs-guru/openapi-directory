import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";


// InsertTextRequest
/** 
 * Inserts text at the specified location.
**/
export class InsertTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
