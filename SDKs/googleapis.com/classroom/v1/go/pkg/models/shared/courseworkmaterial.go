package shared

type CourseWorkMaterialAssigneeModeEnum string

const (
	CourseWorkMaterialAssigneeModeEnumAssigneeModeUnspecified CourseWorkMaterialAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
	CourseWorkMaterialAssigneeModeEnumAllStudents             CourseWorkMaterialAssigneeModeEnum = "ALL_STUDENTS"
	CourseWorkMaterialAssigneeModeEnumIndividualStudents      CourseWorkMaterialAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)

type CourseWorkMaterialStateEnum string

const (
	CourseWorkMaterialStateEnumCourseworkMaterialStateUnspecified CourseWorkMaterialStateEnum = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
	CourseWorkMaterialStateEnumPublished                          CourseWorkMaterialStateEnum = "PUBLISHED"
	CourseWorkMaterialStateEnumDraft                              CourseWorkMaterialStateEnum = "DRAFT"
	CourseWorkMaterialStateEnumDeleted                            CourseWorkMaterialStateEnum = "DELETED"
)

type CourseWorkMaterial struct {
	AlternateLink             *string                             `json:"alternateLink"`
	AssigneeMode              *CourseWorkMaterialAssigneeModeEnum `json:"assigneeMode"`
	CourseID                  *string                             `json:"courseId"`
	CreationTime              *string                             `json:"creationTime"`
	CreatorUserID             *string                             `json:"creatorUserId"`
	Description               *string                             `json:"description"`
	ID                        *string                             `json:"id"`
	IndividualStudentsOptions *IndividualStudentsOptions          `json:"individualStudentsOptions"`
	Materials                 []Material                          `json:"materials"`
	ScheduledTime             *string                             `json:"scheduledTime"`
	State                     *CourseWorkMaterialStateEnum        `json:"state"`
	Title                     *string                             `json:"title"`
	TopicID                   *string                             `json:"topicId"`
	UpdateTime                *string                             `json:"updateTime"`
}
