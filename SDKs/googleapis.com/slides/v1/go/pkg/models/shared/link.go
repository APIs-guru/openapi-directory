package shared

type LinkRelativeLinkEnum string

const (
	LinkRelativeLinkEnumRelativeSlideLinkUnspecified LinkRelativeLinkEnum = "RELATIVE_SLIDE_LINK_UNSPECIFIED"
	LinkRelativeLinkEnumNextSlide                    LinkRelativeLinkEnum = "NEXT_SLIDE"
	LinkRelativeLinkEnumPreviousSlide                LinkRelativeLinkEnum = "PREVIOUS_SLIDE"
	LinkRelativeLinkEnumFirstSlide                   LinkRelativeLinkEnum = "FIRST_SLIDE"
	LinkRelativeLinkEnumLastSlide                    LinkRelativeLinkEnum = "LAST_SLIDE"
)

type Link struct {
	PageObjectID *string               `json:"pageObjectId"`
	RelativeLink *LinkRelativeLinkEnum `json:"relativeLink"`
	SlideIndex   *int32                `json:"slideIndex"`
	URL          *string               `json:"url"`
}
