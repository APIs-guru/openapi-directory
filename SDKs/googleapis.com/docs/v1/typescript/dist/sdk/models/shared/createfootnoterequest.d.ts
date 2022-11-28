import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
**/
export declare class CreateFootnoteRequest extends SpeakeasyBase {
    endOfSegmentLocation?: EndOfSegmentLocation;
    location?: Location;
}
