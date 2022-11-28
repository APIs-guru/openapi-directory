import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
import { Size } from "./size";
/**
 * Inserts an InlineObject containing an image at the given location.
**/
export declare class InsertInlineImageRequest extends SpeakeasyBase {
    endOfSegmentLocation?: EndOfSegmentLocation;
    location?: Location;
    objectSize?: Size;
    uri?: string;
}
