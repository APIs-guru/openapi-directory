import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Inserts a table at the specified location. A newline character will be inserted before the inserted table.
**/
export declare class InsertTableRequest extends SpeakeasyBase {
    columns?: number;
    endOfSegmentLocation?: EndOfSegmentLocation;
    location?: Location;
    rows?: number;
}
