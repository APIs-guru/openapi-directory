import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
export declare enum InsertSectionBreakRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Continuous = "CONTINUOUS",
    NextPage = "NEXT_PAGE"
}
/**
 * Inserts a section break at the given location. A newline character will be inserted before the section break.
**/
export declare class InsertSectionBreakRequest extends SpeakeasyBase {
    endOfSegmentLocation?: EndOfSegmentLocation;
    location?: Location;
    sectionType?: InsertSectionBreakRequestSectionTypeEnum;
}
