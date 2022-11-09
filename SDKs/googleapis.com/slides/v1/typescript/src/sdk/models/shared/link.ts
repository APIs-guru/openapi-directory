import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LinkRelativeLinkEnum {
    RelativeSlideLinkUnspecified = "RELATIVE_SLIDE_LINK_UNSPECIFIED"
,    NextSlide = "NEXT_SLIDE"
,    PreviousSlide = "PREVIOUS_SLIDE"
,    FirstSlide = "FIRST_SLIDE"
,    LastSlide = "LAST_SLIDE"
}


// Link
/** 
 * A hypertext link.
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageObjectId" })
  pageObjectId?: string;

  @Metadata({ data: "json, name=relativeLink" })
  relativeLink?: LinkRelativeLinkEnum;

  @Metadata({ data: "json, name=slideIndex" })
  slideIndex?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
