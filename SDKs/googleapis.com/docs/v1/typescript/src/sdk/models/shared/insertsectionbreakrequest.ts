import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";


export enum InsertSectionBreakRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Continuous = "CONTINUOUS",
    NextPage = "NEXT_PAGE"
}


// InsertSectionBreakRequest
/** 
 * Inserts a section break at the given location. A newline character will be inserted before the section break.
**/
export class InsertSectionBreakRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: InsertSectionBreakRequestSectionTypeEnum;
}
