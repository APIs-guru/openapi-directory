package shared

type CourseWorkAssigneeModeEnum string

const (
	CourseWorkAssigneeModeEnumAssigneeModeUnspecified CourseWorkAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
	CourseWorkAssigneeModeEnumAllStudents             CourseWorkAssigneeModeEnum = "ALL_STUDENTS"
	CourseWorkAssigneeModeEnumIndividualStudents      CourseWorkAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)

type CourseWorkStateEnum string

const (
	CourseWorkStateEnumCourseWorkStateUnspecified CourseWorkStateEnum = "COURSE_WORK_STATE_UNSPECIFIED"
	CourseWorkStateEnumPublished                  CourseWorkStateEnum = "PUBLISHED"
	CourseWorkStateEnumDraft                      CourseWorkStateEnum = "DRAFT"
	CourseWorkStateEnumDeleted                    CourseWorkStateEnum = "DELETED"
)

type CourseWorkSubmissionModificationModeEnum string

const (
	CourseWorkSubmissionModificationModeEnumSubmissionModificationModeUnspecified CourseWorkSubmissionModificationModeEnum = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED"
	CourseWorkSubmissionModificationModeEnumModifiableUntilTurnedIn               CourseWorkSubmissionModificationModeEnum = "MODIFIABLE_UNTIL_TURNED_IN"
	CourseWorkSubmissionModificationModeEnumModifiable                            CourseWorkSubmissionModificationModeEnum = "MODIFIABLE"
)

type CourseWorkWorkTypeEnum string

const (
	CourseWorkWorkTypeEnumCourseWorkTypeUnspecified CourseWorkWorkTypeEnum = "COURSE_WORK_TYPE_UNSPECIFIED"
	CourseWorkWorkTypeEnumAssignment                CourseWorkWorkTypeEnum = "ASSIGNMENT"
	CourseWorkWorkTypeEnumShortAnswerQuestion       CourseWorkWorkTypeEnum = "SHORT_ANSWER_QUESTION"
	CourseWorkWorkTypeEnumMultipleChoiceQuestion    CourseWorkWorkTypeEnum = "MULTIPLE_CHOICE_QUESTION"
)

type CourseWork struct {
	AlternateLink              *string                                   `json:"alternateLink"`
	AssigneeMode               *CourseWorkAssigneeModeEnum               `json:"assigneeMode"`
	Assignment                 *Assignment                               `json:"assignment"`
	AssociatedWithDeveloper    *bool                                     `json:"associatedWithDeveloper"`
	CourseID                   *string                                   `json:"courseId"`
	CreationTime               *string                                   `json:"creationTime"`
	CreatorUserID              *string                                   `json:"creatorUserId"`
	Description                *string                                   `json:"description"`
	DueDate                    *Date                                     `json:"dueDate"`
	DueTime                    *TimeOfDay                                `json:"dueTime"`
	GradeCategory              *GradeCategory                            `json:"gradeCategory"`
	ID                         *string                                   `json:"id"`
	IndividualStudentsOptions  *IndividualStudentsOptions                `json:"individualStudentsOptions"`
	Materials                  []Material                                `json:"materials"`
	MaxPoints                  *float64                                  `json:"maxPoints"`
	MultipleChoiceQuestion     *MultipleChoiceQuestion                   `json:"multipleChoiceQuestion"`
	ScheduledTime              *string                                   `json:"scheduledTime"`
	State                      *CourseWorkStateEnum                      `json:"state"`
	SubmissionModificationMode *CourseWorkSubmissionModificationModeEnum `json:"submissionModificationMode"`
	Title                      *string                                   `json:"title"`
	TopicID                    *string                                   `json:"topicId"`
	UpdateTime                 *string                                   `json:"updateTime"`
	WorkType                   *CourseWorkWorkTypeEnum                   `json:"workType"`
}
