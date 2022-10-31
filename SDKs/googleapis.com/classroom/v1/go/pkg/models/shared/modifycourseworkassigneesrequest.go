package shared




type ModifyCourseWorkAssigneesRequestAssigneeModeEnum string

const (
    ModifyCourseWorkAssigneesRequestAssigneeModeEnumAssigneeModeUnspecified ModifyCourseWorkAssigneesRequestAssigneeModeEnum = "ASSIGNEE_MODE_UNSPECIFIED"
ModifyCourseWorkAssigneesRequestAssigneeModeEnumAllStudents ModifyCourseWorkAssigneesRequestAssigneeModeEnum = "ALL_STUDENTS"
ModifyCourseWorkAssigneesRequestAssigneeModeEnumIndividualStudents ModifyCourseWorkAssigneesRequestAssigneeModeEnum = "INDIVIDUAL_STUDENTS"
)


type ModifyCourseWorkAssigneesRequest struct {
    AssigneeMode *ModifyCourseWorkAssigneesRequestAssigneeModeEnum `json:"assigneeMode,omitempty"`
    ModifyIndividualStudentsOptions *ModifyIndividualStudentsOptions `json:"modifyIndividualStudentsOptions,omitempty"`
    
}

