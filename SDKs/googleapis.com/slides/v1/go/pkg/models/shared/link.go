package shared

type LinkRelativeLinkEnum string

const (
	LinkRelativeLinkEnumRelativeSlideLinkUnspecified LinkRelativeLinkEnum = "RELATIVE_SLIDE_LINK_UNSPECIFIED"
	LinkRelativeLinkEnumNextSlide                    LinkRelativeLinkEnum = "NEXT_SLIDE"
	LinkRelativeLinkEnumPreviousSlide                LinkRelativeLinkEnum = "PREVIOUS_SLIDE"
	LinkRelativeLinkEnumFirstSlide                   LinkRelativeLinkEnum = "FIRST_SLIDE"
	LinkRelativeLinkEnumLastSlide                    LinkRelativeLinkEnum = "LAST_SLIDE"
)

// Link
// A hypertext link.
type Link struct {
	PageObjectID *string               `json:"pageObjectId,omitempty"`
	RelativeLink *LinkRelativeLinkEnum `json:"relativeLink,omitempty"`
	SlideIndex   *int32                `json:"slideIndex,omitempty"`
	URL          *string               `json:"url,omitempty"`
}
