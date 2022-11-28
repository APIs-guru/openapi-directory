package shared

// CourseRosterChangesInfo
// Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
type CourseRosterChangesInfo struct {
	CourseID *string `json:"courseId,omitempty"`
}
