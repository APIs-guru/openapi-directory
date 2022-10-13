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
	AlternateLink      *string                `json:"alternateLink"`
	CalendarID         *string                `json:"calendarId"`
	CourseGroupEmail   *string                `json:"courseGroupEmail"`
	CourseMaterialSets []CourseMaterialSet    `json:"courseMaterialSets"`
	CourseState        *CourseCourseStateEnum `json:"courseState"`
	CreationTime       *string                `json:"creationTime"`
	Description        *string                `json:"description"`
	DescriptionHeading *string                `json:"descriptionHeading"`
	EnrollmentCode     *string                `json:"enrollmentCode"`
	GradebookSettings  *GradebookSettings     `json:"gradebookSettings"`
	GuardiansEnabled   *bool                  `json:"guardiansEnabled"`
	ID                 *string                `json:"id"`
	Name               *string                `json:"name"`
	OwnerID            *string                `json:"ownerId"`
	Room               *string                `json:"room"`
	Section            *string                `json:"section"`
	TeacherFolder      *DriveFolder           `json:"teacherFolder"`
	TeacherGroupEmail  *string                `json:"teacherGroupEmail"`
	UpdateTime         *string                `json:"updateTime"`
}
