import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LinkRelativeLinkEnum {
    RelativeSlideLinkUnspecified = "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    NextSlide = "NEXT_SLIDE",
    PreviousSlide = "PREVIOUS_SLIDE",
    FirstSlide = "FIRST_SLIDE",
    LastSlide = "LAST_SLIDE"
}


// Link
/** 
 * A hypertext link.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageObjectId" })
  pageObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=relativeLink" })
  relativeLink?: LinkRelativeLinkEnum;

  @SpeakeasyMetadata({ data: "json, name=slideIndex" })
  slideIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
