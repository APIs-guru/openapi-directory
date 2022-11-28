import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";



// InsertTableRequest
/** 
 * Inserts a table at the specified location. A newline character will be inserted before the inserted table.
**/
export class InsertTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: number;

  @SpeakeasyMetadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;
}
