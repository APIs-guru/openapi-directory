import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Inserts a page break followed by a newline at the specified location.
**/
export declare class InsertPageBreakRequest extends SpeakeasyBase {
    endOfSegmentLocation?: EndOfSegmentLocation;
    location?: Location;
}
