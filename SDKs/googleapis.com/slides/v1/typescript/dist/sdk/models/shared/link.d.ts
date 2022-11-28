import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LinkRelativeLinkEnum {
    RelativeSlideLinkUnspecified = "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    NextSlide = "NEXT_SLIDE",
    PreviousSlide = "PREVIOUS_SLIDE",
    FirstSlide = "FIRST_SLIDE",
    LastSlide = "LAST_SLIDE"
}
/**
 * A hypertext link.
**/
export declare class Link extends SpeakeasyBase {
    pageObjectId?: string;
    relativeLink?: LinkRelativeLinkEnum;
    slideIndex?: number;
    url?: string;
}
