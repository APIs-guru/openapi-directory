package shared

type FeedFeedTypeEnum string

const (
	FeedFeedTypeEnumFeedTypeUnspecified FeedFeedTypeEnum = "FEED_TYPE_UNSPECIFIED"
	FeedFeedTypeEnumDomainRosterChanges FeedFeedTypeEnum = "DOMAIN_ROSTER_CHANGES"
	FeedFeedTypeEnumCourseRosterChanges FeedFeedTypeEnum = "COURSE_ROSTER_CHANGES"
	FeedFeedTypeEnumCourseWorkChanges   FeedFeedTypeEnum = "COURSE_WORK_CHANGES"
)

// Feed
// A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
type Feed struct {
	CourseRosterChangesInfo *CourseRosterChangesInfo `json:"courseRosterChangesInfo,omitempty"`
	CourseWorkChangesInfo   *CourseWorkChangesInfo   `json:"courseWorkChangesInfo,omitempty"`
	FeedType                *FeedFeedTypeEnum        `json:"feedType,omitempty"`
}
