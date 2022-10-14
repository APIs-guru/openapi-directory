package shared

type CourseCourseStateEnum string

const (
	CourseCourseStateEnumCourseStateUnspecified CourseCourseStateEnum = "COURSE_STATE_UNSPECIFIED"
	CourseCourseStateEnumActive                 CourseCourseStateEnum = "ACTIVE"
	CourseCourseStateEnumArchived               CourseCourseStateEnum = "ARCHIVED"
	CourseCourseStateEnumProvisioned            CourseCourseStateEnum = "PROVISIONED"
	CourseCourseStateEnumDeclined               CourseCourseStateEnum = "DECLINED"
	CourseCourseStateEnumSuspended              CourseCourseStateEnum = "SUSPENDED"
)

type Course struct {
	AlternateLink      *string                `json:"alternateLink,omitempty"`
	CalendarID         *string                `json:"calendarId,omitempty"`
	CourseGroupEmail   *string                `json:"courseGroupEmail,omitempty"`
	CourseMaterialSets []CourseMaterialSet    `json:"courseMaterialSets,omitempty"`
	CourseState        *CourseCourseStateEnum `json:"courseState,omitempty"`
	CreationTime       *string                `json:"creationTime,omitempty"`
	Description        *string                `json:"description,omitempty"`
	DescriptionHeading *string                `json:"descriptionHeading,omitempty"`
	EnrollmentCode     *string                `json:"enrollmentCode,omitempty"`
	GradebookSettings  *GradebookSettings     `json:"gradebookSettings,omitempty"`
	GuardiansEnabled   *bool                  `json:"guardiansEnabled,omitempty"`
	ID                 *string                `json:"id,omitempty"`
	Name               *string                `json:"name,omitempty"`
	OwnerID            *string                `json:"ownerId,omitempty"`
	Room               *string                `json:"room,omitempty"`
	Section            *string                `json:"section,omitempty"`
	TeacherFolder      *DriveFolder           `json:"teacherFolder,omitempty"`
	TeacherGroupEmail  *string                `json:"teacherGroupEmail,omitempty"`
	UpdateTime         *string                `json:"updateTime,omitempty"`
}
