import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";


// InsertTableRequest
/** 
 * Inserts a table at the specified location. A newline character will be inserted before the inserted table.
**/
export class InsertTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=rows" })
  rows?: number;
}
