package shared




type CourseWorkAssigneeModeEnum string

const (
    CourseWorkAssigneeModeEnumAssigneeModeUnspecified CourseWorkAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
CourseWorkAssigneeModeEnumAllStudents CourseWorkAssigneeModeEnum = "ALL_STUDENTS"
CourseWorkAssigneeModeEnumIndividualStudents CourseWorkAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)



type CourseWorkStateEnum string

const (
    CourseWorkStateEnumCourseWorkStateUnspecified CourseWorkStateEnum = "COURSE_WORK_STATE_UNSPECIFIED"
CourseWorkStateEnumPublished CourseWorkStateEnum = "PUBLISHED"
CourseWorkStateEnumDraft CourseWorkStateEnum = "DRAFT"
CourseWorkStateEnumDeleted CourseWorkStateEnum = "DELETED"
)



type CourseWorkSubmissionModificationModeEnum string

const (
    CourseWorkSubmissionModificationModeEnumSubmissionModificationModeUnspecified CourseWorkSubmissionModificationModeEnum = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED"
CourseWorkSubmissionModificationModeEnumModifiableUntilTurnedIn CourseWorkSubmissionModificationModeEnum = "MODIFIABLE_UNTIL_TURNED_IN"
CourseWorkSubmissionModificationModeEnumModifiable CourseWorkSubmissionModificationModeEnum = "MODIFIABLE"
)



type CourseWorkWorkTypeEnum string

const (
    CourseWorkWorkTypeEnumCourseWorkTypeUnspecified CourseWorkWorkTypeEnum = "COURSE_WORK_TYPE_UNSPECIFIED"
CourseWorkWorkTypeEnumAssignment CourseWorkWorkTypeEnum = "ASSIGNMENT"
CourseWorkWorkTypeEnumShortAnswerQuestion CourseWorkWorkTypeEnum = "SHORT_ANSWER_QUESTION"
CourseWorkWorkTypeEnumMultipleChoiceQuestion CourseWorkWorkTypeEnum = "MULTIPLE_CHOICE_QUESTION"
)


type CourseWork struct {
    AlternateLink *string `json:"alternateLink,omitempty"`
    AssigneeMode *CourseWorkAssigneeModeEnum `json:"assigneeMode,omitempty"`
    Assignment *Assignment `json:"assignment,omitempty"`
    AssociatedWithDeveloper *bool `json:"associatedWithDeveloper,omitempty"`
    CourseID *string `json:"courseId,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    CreatorUserID *string `json:"creatorUserId,omitempty"`
    Description *string `json:"description,omitempty"`
    DueDate *Date `json:"dueDate,omitempty"`
    DueTime *TimeOfDay `json:"dueTime,omitempty"`
    GradeCategory *GradeCategory `json:"gradeCategory,omitempty"`
    ID *string `json:"id,omitempty"`
    IndividualStudentsOptions *IndividualStudentsOptions `json:"individualStudentsOptions,omitempty"`
    Materials []Material `json:"materials,omitempty"`
    MaxPoints *float64 `json:"maxPoints,omitempty"`
    MultipleChoiceQuestion *MultipleChoiceQuestion `json:"multipleChoiceQuestion,omitempty"`
    ScheduledTime *string `json:"scheduledTime,omitempty"`
    State *CourseWorkStateEnum `json:"state,omitempty"`
    SubmissionModificationMode *CourseWorkSubmissionModificationModeEnum `json:"submissionModificationMode,omitempty"`
    Title *string `json:"title,omitempty"`
    TopicID *string `json:"topicId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WorkType *CourseWorkWorkTypeEnum `json:"workType,omitempty"`
    
}

