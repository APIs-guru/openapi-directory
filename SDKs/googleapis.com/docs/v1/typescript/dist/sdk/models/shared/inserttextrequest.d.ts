import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Inserts text at the specified location.
**/
export declare class InsertTextRequest extends SpeakeasyBase {
    endOfSegmentLocation?: EndOfSegmentLocation;
    location?: Location;
    text?: string;
}
