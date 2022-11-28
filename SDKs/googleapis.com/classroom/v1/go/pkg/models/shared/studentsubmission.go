package shared

type StudentSubmissionCourseWorkTypeEnum string

const (
	StudentSubmissionCourseWorkTypeEnumCourseWorkTypeUnspecified StudentSubmissionCourseWorkTypeEnum = "COURSE_WORK_TYPE_UNSPECIFIED"
	StudentSubmissionCourseWorkTypeEnumAssignment                StudentSubmissionCourseWorkTypeEnum = "ASSIGNMENT"
	StudentSubmissionCourseWorkTypeEnumShortAnswerQuestion       StudentSubmissionCourseWorkTypeEnum = "SHORT_ANSWER_QUESTION"
	StudentSubmissionCourseWorkTypeEnumMultipleChoiceQuestion    StudentSubmissionCourseWorkTypeEnum = "MULTIPLE_CHOICE_QUESTION"
)

type StudentSubmissionStateEnum string

const (
	StudentSubmissionStateEnumSubmissionStateUnspecified StudentSubmissionStateEnum = "SUBMISSION_STATE_UNSPECIFIED"
	StudentSubmissionStateEnumNew                        StudentSubmissionStateEnum = "NEW"
	StudentSubmissionStateEnumCreated                    StudentSubmissionStateEnum = "CREATED"
	StudentSubmissionStateEnumTurnedIn                   StudentSubmissionStateEnum = "TURNED_IN"
	StudentSubmissionStateEnumReturned                   StudentSubmissionStateEnum = "RETURNED"
	StudentSubmissionStateEnumReclaimedByStudent         StudentSubmissionStateEnum = "RECLAIMED_BY_STUDENT"
)

// StudentSubmission
// Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
type StudentSubmission struct {
	AlternateLink            *string                              `json:"alternateLink,omitempty"`
	AssignedGrade            *float64                             `json:"assignedGrade,omitempty"`
	AssignmentSubmission     *AssignmentSubmission                `json:"assignmentSubmission,omitempty"`
	AssociatedWithDeveloper  *bool                                `json:"associatedWithDeveloper,omitempty"`
	CourseID                 *string                              `json:"courseId,omitempty"`
	CourseWorkID             *string                              `json:"courseWorkId,omitempty"`
	CourseWorkType           *StudentSubmissionCourseWorkTypeEnum `json:"courseWorkType,omitempty"`
	CreationTime             *string                              `json:"creationTime,omitempty"`
	DraftGrade               *float64                             `json:"draftGrade,omitempty"`
	ID                       *string                              `json:"id,omitempty"`
	Late                     *bool                                `json:"late,omitempty"`
	MultipleChoiceSubmission *MultipleChoiceSubmission            `json:"multipleChoiceSubmission,omitempty"`
	ShortAnswerSubmission    *ShortAnswerSubmission               `json:"shortAnswerSubmission,omitempty"`
	State                    *StudentSubmissionStateEnum          `json:"state,omitempty"`
	SubmissionHistory        []SubmissionHistory                  `json:"submissionHistory,omitempty"`
	UpdateTime               *string                              `json:"updateTime,omitempty"`
	UserID                   *string                              `json:"userId,omitempty"`
}
