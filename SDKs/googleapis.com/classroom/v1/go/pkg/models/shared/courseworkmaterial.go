package shared




type CourseWorkMaterialAssigneeModeEnum string

const (
    CourseWorkMaterialAssigneeModeEnumAssigneeModeUnspecified CourseWorkMaterialAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
CourseWorkMaterialAssigneeModeEnumAllStudents CourseWorkMaterialAssigneeModeEnum = "ALL_STUDENTS"
CourseWorkMaterialAssigneeModeEnumIndividualStudents CourseWorkMaterialAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)



type CourseWorkMaterialStateEnum string

const (
    CourseWorkMaterialStateEnumCourseworkMaterialStateUnspecified CourseWorkMaterialStateEnum = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
CourseWorkMaterialStateEnumPublished CourseWorkMaterialStateEnum = "PUBLISHED"
CourseWorkMaterialStateEnumDraft CourseWorkMaterialStateEnum = "DRAFT"
CourseWorkMaterialStateEnumDeleted CourseWorkMaterialStateEnum = "DELETED"
)


type CourseWorkMaterial struct {
    AlternateLink *string `json:"alternateLink,omitempty"`
    AssigneeMode *CourseWorkMaterialAssigneeModeEnum `json:"assigneeMode,omitempty"`
    CourseID *string `json:"courseId,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    CreatorUserID *string `json:"creatorUserId,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    IndividualStudentsOptions *IndividualStudentsOptions `json:"individualStudentsOptions,omitempty"`
    Materials []Material `json:"materials,omitempty"`
    ScheduledTime *string `json:"scheduledTime,omitempty"`
    State *CourseWorkMaterialStateEnum `json:"state,omitempty"`
    Title *string `json:"title,omitempty"`
    TopicID *string `json:"topicId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

