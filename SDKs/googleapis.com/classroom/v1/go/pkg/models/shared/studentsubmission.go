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

type StudentSubmission struct {
	AlternateLink            *string                              `json:"alternateLink"`
	AssignedGrade            *float64                             `json:"assignedGrade"`
	AssignmentSubmission     *AssignmentSubmission                `json:"assignmentSubmission"`
	AssociatedWithDeveloper  *bool                                `json:"associatedWithDeveloper"`
	CourseID                 *string                              `json:"courseId"`
	CourseWorkID             *string                              `json:"courseWorkId"`
	CourseWorkType           *StudentSubmissionCourseWorkTypeEnum `json:"courseWorkType"`
	CreationTime             *string                              `json:"creationTime"`
	DraftGrade               *float64                             `json:"draftGrade"`
	ID                       *string                              `json:"id"`
	Late                     *bool                                `json:"late"`
	MultipleChoiceSubmission *MultipleChoiceSubmission            `json:"multipleChoiceSubmission"`
	ShortAnswerSubmission    *ShortAnswerSubmission               `json:"shortAnswerSubmission"`
	State                    *StudentSubmissionStateEnum          `json:"state"`
	SubmissionHistory        []SubmissionHistory                  `json:"submissionHistory"`
	UpdateTime               *string                              `json:"updateTime"`
	UserID                   *string                              `json:"userId"`
}
