import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";

export enum InsertSectionBreakRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    Continuous = "CONTINUOUS"
,    NextPage = "NEXT_PAGE"
}


// InsertSectionBreakRequest
/** 
 * Inserts a section break at the given location. A newline character will be inserted before the section break.
**/
export class InsertSectionBreakRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endOfSegmentLocation" })
  endOfSegmentLocation?: EndOfSegmentLocation;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: InsertSectionBreakRequestSectionTypeEnum;
}
